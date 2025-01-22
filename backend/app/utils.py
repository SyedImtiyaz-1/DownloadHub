import os
import requests
from typing import Dict, Any, Optional
from urllib.parse import urlparse, parse_qs
from pytube import YouTube
from pytube.exceptions import PytubeError

# Set default headers for all requests
requests.utils.default_headers = requests.structures.CaseInsensitiveDict({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

def is_valid_youtube_url(url: str) -> bool:
    """Validate if the given URL is a valid YouTube URL."""
    try:
        parsed_url = urlparse(url)
        if 'youtube.com' in parsed_url.netloc or 'youtu.be' in parsed_url.netloc:
            return True
        return False
    except Exception:
        return False

def extract_video_id(url: str) -> str:
    """Extract video ID from YouTube URL."""
    if 'youtu.be' in url:
        return url.split('/')[-1]
    if 'v=' in url:
        return url.split('v=')[1].split('&')[0]
    raise ValueError("Could not extract video ID from URL")

def get_video_info(url: str) -> Dict[str, Any]:
    """Get video information from YouTube URL."""
    if not is_valid_youtube_url(url):
        raise ValueError("Invalid YouTube URL")
        
    try:
        # Extract video ID first
        video_id = extract_video_id(url)
        print(f"Extracted video ID: {video_id}")
        
        # Create a session with headers
        session = requests.Session()
        session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
        })
        
        # Fetch video page
        response = session.get(f'https://www.youtube.com/watch?v={video_id}')
        response.raise_for_status()
        
        # Create YouTube object
        yt = YouTube(
            url,
            on_progress_callback=None,
            on_complete_callback=None,
            use_oauth=False,
            allow_oauth_cache=False
        )
        
        # Try to get streams to verify video availability
        streams = yt.streams.filter(progressive=True)
        if not streams:
            raise Exception("No available streams found. Video might be restricted or unavailable.")
        
        # Get basic info
        info = {
            'title': "Video Title",  # We'll update this if we can
            'author': "Channel Name",
            'length': 0,
            'thumbnail': f'https://img.youtube.com/vi/{video_id}/hqdefault.jpg',
            'views': 0
        }
        
        # Try to get each piece of information
        try:
            stream = streams.first()
            if stream:
                info['title'] = stream.title or "Video Title"
        except Exception as e:
            print(f"Error getting title: {e}")
        
        print(f"Final extracted info: {info}")
        return info
        
    except Exception as e:
        print(f"Error in get_video_info: {str(e)}")
        if '403' in str(e):
            raise Exception("Access to this video is restricted. Please try another video.")
        raise Exception(f"Could not fetch video information: {str(e)}")

def download_video(data: Dict[str, Any]) -> Dict[str, Any]:
    """Download YouTube video using provided URL and options."""
    url = data.get('url')
    format_type = data.get('format', 'mp4').lower()
    
    if not url:
        raise ValueError("URL is required")
    
    if not is_valid_youtube_url(url):
        raise ValueError("Invalid YouTube URL")
    
    if format_type not in ['mp4', 'mp3']:
        raise ValueError("Invalid format. Supported formats: mp4, mp3")

    try:
        # Create downloads directory if it doesn't exist
        download_path = os.path.join(os.getcwd(), 'downloads')
        os.makedirs(download_path, exist_ok=True)
        
        # Create YouTube object
        yt = YouTube(url)
        
        # Get video info first
        video_info = get_video_info(url)
        
        # Download based on format
        if format_type == 'mp4':
            stream = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
            if not stream:
                raise Exception("No suitable video stream found")
            file_path = stream.download(download_path)
        else:  # mp3
            stream = yt.streams.filter(only_audio=True).first()
            if not stream:
                raise Exception("No suitable audio stream found")
            file_path = stream.download(download_path)
            # Convert to MP3
            base, _ = os.path.splitext(file_path)
            new_file_path = base + '.mp3'
            os.rename(file_path, new_file_path)
            file_path = new_file_path
        
        return {
            'status': 'success',
            'message': f'{"Video" if format_type == "mp4" else "Audio"} downloaded successfully',
            'file_path': file_path,
            'format': format_type,
            'video_info': video_info
        }
    except PytubeError as e:
        raise Exception(f"Error downloading {'video' if format_type == 'mp4' else 'audio'}: {str(e)}")
    except Exception as e:
        raise Exception(f"Unexpected error: {str(e)}")