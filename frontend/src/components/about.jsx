import React from 'react'

const About = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        About <span className="text-sky-600">DownloadHub</span>
                    </h1>
                    
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-700">Our Platform</h2>
                            <p className="text-gray-600 leading-relaxed">
                                DownloadHub is your one-stop solution for downloading content from popular social media platforms. 
                                We provide a simple, fast, and reliable way to save your favorite videos and media for offline viewing.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-700">Supported Platforms</h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-sky-600 mb-2">Youtube</h3>
                                    <p className="text-gray-600">
                                        Download videos in MP4 format or extract audio in MP3 format
                                    </p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-sky-600 mb-2">Instagram</h3>
                                    <p className="text-gray-600">
                                        Save posts, reels, and stories directly to your device
                                    </p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-sky-600 mb-2">Twitter</h3>
                                    <p className="text-gray-600">
                                        Download tweets with media, including videos and images
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-700">Features</h2>
                            <ul className="grid gap-3 md:grid-cols-2 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                                    <span>Fast and reliable downloads</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                                    <span>Multiple format options</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                                    <span>No registration required</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                                    <span>User-friendly interface</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About