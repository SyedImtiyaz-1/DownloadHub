import React, { useState } from 'react'

const Youtube = () => {
    const [format, setFormat] = useState('mp4')

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
                    
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <input 
                            type="text" 
                            placeholder="Paste the Youtube link here" 
                            className="flex-1 p-3 sm:p-4 text-sm sm:text-base rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-200 outline-none text-gray-600 placeholder-gray-400"
                        />
                        <button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                            Download {format.toUpperCase()}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube