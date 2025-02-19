import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const { signIn } = useContext(AuthContext)

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(userInfo => {
                console.log(userInfo)
                navigate(location.state? location.state : "/")
            })
            .catch(err => console.log(err))
    }



    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
            <div className="bg-white  shadow-lg p-10 max-w-full">
                <h1 className="text-3xl font-semibold text-center text-[#403F3F] mb-6">Login to Your Account</h1>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className=' relative'>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                {...register("password")}
                                className="w-full bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                            <a href="/forgot-password" className="hover:underline">Forgot Password?</a>
                        </div>
                    </div>
                    <Link to={"/"}> <button
                        type="button"
                        className="w-full bg-orange-500 text-xl font-semibold text-white py-3  hover:bg-gray-800 transition duration-200"
                    >
                        Login
                    </button></Link>
                </form>

                <div className="text-center my-4">
                    <span className="text-gray-600">or login with</span>
                </div>


                <div className="text-center mt-6 text-gray-600">
                    Don’t have an account?{" "}
                    <Link state={location.state} to={"/register"} className="text-orange-500 font-medium hover:underline">
                        Register here
                    </Link>
                </div>

                <Toaster />
            </div>
        </div>

    );
};

export default Login;
