import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-600 to-purple-700 text-white">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold animate__animated animate__fadeIn">404!</h1>
                    <p className="text-2xl text-white mt-4 animate__animated animate__fadeIn animate__delay-1s">Oops! Page not found.</p>
                    <p className="text-lg text-white mt-2 animate__animated animate__fadeIn animate__delay-2s">The page you're looking for doesn't exist or may have been moved.</p>

                    <Link to={"/"}>
                        <button className="mt-6 inline-block px-8 py-4 bg-white text-orange-600 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;