import React, { useState } from 'react';

const Youtube = () => {
    const [format, setFormat] = useState('mp4');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [videoInfo, setVideoInfo] = useState(null);

    const fetchVideoInfo = async () => {
        if (!url.trim()) return;
        
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });
            
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch video information');
            }
            
            setVideoInfo(data.data);
        } catch (err) {
            setError(err.message);
            setVideoInfo(null);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async () => {
        if (!url.trim()) {
            setError('Please enter a YouTube URL');
            return;
        }
        
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/video/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url, format }),
            });
            
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Download failed');
            }

            // Handle successful download
            alert('Download started successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="youtube min-h-[80vh] flex items-center justify-center bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                            Youtube<span className="text-sky-600">Download</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600">
                            Turn Links into Downloads in Seconds!
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 py-2">
                        <label className="flex items-center justify-center space-x-3 cursor-pointer group w-full sm:w-auto">
                            <input
                                type="radio"
                                name="format"
                                value="mp4"
                                checked={format === 'mp4'}
                                onChange={(e) => setFormat(e.target.value)}
                                className="w-5 h-5 text-sky-600 border-2 border-gray-300 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            />
                            <span className="text-lg sm:text-base text-gray-700 group-hover:text-sky-600 transition-colors font-medium">
                                MP4 Video
                            </span>
                        </label>
                        <label className="flex items-center justify-center space-x-3 cursor-pointer group w-full sm:w-auto">
                            <input
                                type="radio"
                                name="format"
                                value="mp3"
                                checked={format === 'mp3'}
                                onChange={(e) => setFormat(e.target.value)}
                                className="w-5 h-5 text-sky-600 border-2 border-gray-300 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            />
                            <span className="text-lg sm:text-base text-gray-700 group-hover:text-sky-600 transition-colors font-medium">
                                MP3 Audio
                            </span>
                        </label>
                    </div>
                    
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <input 
                                type="text" 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                onBlur={fetchVideoInfo}
                                placeholder="Paste the Youtube link here" 
                                className="flex-1 p-3 sm:p-4 text-sm sm:text-base rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-200 outline-none text-gray-600 placeholder-gray-400"
                            />
                            <button 
                                onClick={handleDownload}
                                disabled={loading || !url.trim()}
                                className={`w-full sm:w-auto ${loading ? 'bg-gray-400' : 'bg-sky-600 hover:bg-sky-700'} text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg`}
                            >
                                {loading ? 'Processing...' : `Download ${format.toUpperCase()}`}
                            </button>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm mt-2">
                                {error}
                            </div>
                        )}

                        {videoInfo && (
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    {videoInfo.thumbnail && (
                                        <img 
                                            src={videoInfo.thumbnail} 
                                            alt={videoInfo.title}
                                            className="w-32 h-auto rounded"
                                        />
                                    )}
                                    <div>
                                        <h3 className="font-semibold text-lg">{videoInfo.title}</h3>
                                        <p className="text-gray-600">By: {videoInfo.author}</p>
                                        <p className="text-gray-600">
                                            Duration: {Math.floor(videoInfo.length / 60)}:{String(videoInfo.length % 60).padStart(2, '0')}
                                        </p>
                                        <p className="text-gray-600">Views: {videoInfo.views.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Youtube;