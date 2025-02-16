import React from 'react';

const ItWorks = () => {
    return (
        <div>
            <section className=" py-12  lg:px-2 px-2">
                <div className=" mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">It Works</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Learn how to donate, find collection points, and see our supported divisions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-200 shadow-xl rounded-2xl p-6 text-center">
                  
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Donate</h3>
                        <p className="text-gray-700 mb-4">
                            Follow these easy steps to make a difference. Choose a category, select a donation method, and contribute securely.
                        </p>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-400 transition">
                            Donate Now
                        </button>
                    </div>

                    <div className="bg-gray-200 shadow-xl rounded-2xl p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Collection Points</h3>
                        <p className="text-gray-700 mb-4">
                            Find a donation drop-off location near you. We have multiple collection points across different regions.
                        </p>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-400 transition">
                            Find Locations
                        </button>
                    </div>

                    <div className="bg-gray-200 shadow-lg rounded-2xl p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Supported Divisions</h3>
                        <p className="text-gray-700 mb-4">
                            Your donations support various divisions, including education, healthcare, and community welfare programs.
                        </p>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl hover:bg-orange-400 transition">
                            View Divisions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItWorks;