import yt_dlp
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/download', methods=['POST'])
def fetch_video_info():
    data = request.get_json()
    url = data.get('url')
    
    if not url:
        return jsonify({'error': 'URL is required'}), 400
    
    ydl_opts = {
        'format': 'best',
        'extract_info': True,
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            return jsonify({
                'data': {
                    'title': info.get('title'),
                    'author': info.get('uploader'),
                    'length': info.get('duration'),
                    'views': info.get('view_count'),
                    'thumbnail': info.get('thumbnail'),
                }
            })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/video/download', methods=['POST'])
def download_video():
    data = request.get_json()
    url = data.get('url')
    format = data.get('format')
    
    if not url:
        return jsonify({'error': 'URL is required'}), 400
    
    ydl_opts = {
        'format': 'bestvideo+bestaudio/best' if format == 'mp4' else 'bestaudio/best',
        'outtmpl': f'%(title)s.%(ext)s',
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return jsonify({'message': 'Download started successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)