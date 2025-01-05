import React, { useState } from 'react'

const twitter = () => {
    const [format, setFormat] = useState('mp4')

    return (
        <div className="youtube min-h-[80vh] flex items-center justify-center bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Twitter<span className="text-sky-600">Download</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Turn Links into Downloads in Seconds!
                        </p>
                    </div>

                    <div className="flex justify-center space-x-8">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="format"
                                value="mp4"
                                checked={format === 'mp4'}
                                onChange={(e) => setFormat(e.target.value)}
                                className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-lg text-gray-700 group-hover:text-sky-600 transition-colors">
                                MP4 Video
                            </span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="format"
                                value="mp3"
                                checked={format === 'mp3'}
                                onChange={(e) => setFormat(e.target.value)}
                                className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-lg text-gray-700 group-hover:text-sky-600 transition-colors">
                                MP3 Audio
                            </span>
                        </label>
                    </div>
                    
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input 
                            type="text" 
                            placeholder="Paste the Youtube link here" 
                            className="flex-1 p-4 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-200 outline-none text-gray-600 placeholder-gray-400"
                        />
                        <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                            Download {format.toUpperCase()}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default twitter;