from flask import Blueprint, request, jsonify
from .utils import download_video, get_video_info, is_valid_youtube_url

# Create blueprint
bp = Blueprint('youtube', __name__)

@bp.route('/api/video/info', methods=['POST'])
def get_video_information():
    """Get information about a YouTube video."""
    try:
        data = request.get_json()
        if not data or 'url' not in data:
            return jsonify({'error': 'URL is required'}), 400

        url = data['url']
        if not is_valid_youtube_url(url):
            return jsonify({'error': 'Invalid YouTube URL'}), 400

        video_info = get_video_info(url)
        return jsonify({'success': True, 'data': video_info}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/api/video/download', methods=['POST'])
def download():
    """Download a YouTube video."""
    try:
        data = request.get_json()
        if not data or 'url' not in data:
            return jsonify({'error': 'URL is required'}), 400

        if not is_valid_youtube_url(data['url']):
            return jsonify({'error': 'Invalid YouTube URL'}), 400

        result = download_video(data)
        return jsonify(result), 200

    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500