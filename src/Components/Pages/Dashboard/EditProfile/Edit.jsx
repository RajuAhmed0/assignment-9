import React from 'react';
import { Link } from 'react-router-dom';

const Edit = () => {
    return (
        <div>
            <div className='mt-[65px]'>
                <div className="flex justify-center items-center min-h-screen p-4 border-3 ">
                    <div className=" p-6 shadow-xl w-full max-w-md text-gray-800 relative">
                        <h1 className='text-center text-orange-600 text-2xl font-semibold mb-5'>Edit Your Profile</h1>

                        <label className="block mb-2 font-semibold">Name</label>
                        <input
                            type="text"
                            placeholder='Please Enter Your Name'
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <label className="block mt-4 mb-2 font-semibold">Photo Url</label>
                        <input
                            type="photoURL"
                            placeholder='Please Add Your PhotoURL'
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <div className='flex justify-between'>
                            <Link to={"/dashboard"}> <button className="w-full mt-6 bg-orange-600 text-white p-3 hover:rounded-3xl  hover:bg-black transition">Upload</button></Link>
                            <Link to={"/"}> <button className="w-full mt-6 bg-orange-600 text-white p-3 hover:rounded-3xl  hover:bg-black transition">Go Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;