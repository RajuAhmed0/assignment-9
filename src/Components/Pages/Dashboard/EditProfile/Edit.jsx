import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Edit = () => {
    const { profileUpdate } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate(); // ✅ Use useNavigate for redirection

    const onSubmit = (data) => {
        profileUpdate(data.name, data.photoURL)
            .then(() => {
                toast.success("Profile Updated Successfully! 🎉");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            })
            .catch(() => {
                toast.error("Profile update failed. Try again.");
            });
    };

    return (
        <div className='flex justify-center items-center min-h-screen p-4 border-3'>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 shadow-xl w-full max-w-md text-gray-800 relative">
                <h1 className='text-center text-orange-600 text-2xl font-semibold mb-5'>Edit Your Profile</h1>

                <label className="block mb-2 font-semibold">Name</label>
                <input
                    type="text"
                    {...register("name")}
                    placeholder='Please Enter Your Name'
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <label className="block mt-4 mb-2 font-semibold">Photo URL</label>
                <input
                    type="text"
                    {...register("photoURL")}
                    placeholder='Please Add Your PhotoURL'
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <div className='flex justify-between mt-6'>
                    <button type="submit" className=" bg-orange-600 text-white px-5 py-2 hover:rounded-3xl hover:bg-black transition">
                        Upload
                    </button>
                    <Link to={"/"}>
                        <button className="px-5 py-2 bg-orange-600 text-white  hover:rounded-3xl hover:bg-black transition">
                            Go Home
                        </button>
                    </Link>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default Edit;
