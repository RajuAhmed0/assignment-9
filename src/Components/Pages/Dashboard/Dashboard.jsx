import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Dashboard = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className='mt-[65px]'>
            <div className="flex justify-center items-center min-h-screen p-4 border-3 ">
                <div className=" p-6 shadow-xl w-full max-w-md text-gray-800 relative">
                    <div className="flex flex-col items-center mb-7">
                        <img
                            src="https://source.unsplash.com/100x100/?chair,modern"
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-orange-300"
                        />
                    </div>

                    <label className="block mb-2 font-semibold">Name</label>
                    <input
                        type="text"
                      placeholder='Please Enter Your Name'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <label className="block mt-4 mb-2 font-semibold">Photo Url</label>
                    <input
                        type="photoURL"
                       placeholder='Please Enter Your PhotoURL'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <label className="block mt-4 mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                     placeholder='Please Enter Your Email'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <label className="block mt-4 mb-2 font-semibold">Password</label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                       placeholder='Enter Your Password'
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {passwordVisible ? <FaEye />  :  <FaEyeSlash />}
                        </button>
                    </div>

                    <button className="w-full mt-6 bg-orange-600 text-white p-3  hover:bg-black transition">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;