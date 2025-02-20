import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase/firebase.config';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    // ✅ Regular Email/Password Login
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(userInfo => {
                console.log("User Logged In:", userInfo);
                toast.success("Login successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.error("Login Error:", error);
                if (error.code === 'auth/wrong-password') {
                    toast.error("Incorrect password. Try again.");
                } else if (error.code === 'auth/user-not-found') {
                    toast.error("No account found with this email.");
                } else {
                    toast.error("Failed to login. Please check your details.");
                }
            });
    };

    // ✅ Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Google Sign-In Success:", result.user);
                toast.success("Google Login Successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
                toast.error("Google Sign-In Failed.");
            });
    };

    // ✅ Forgot Password Handler
    const handleForgetPassBtn = () => {
        if (!email) {
            toast.error("Please enter your email first.");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Check your email to reset your password.");
            })
            .catch(error => {
                console.error("Password Reset Error:", error);
                toast.error("Failed to send reset email.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
            <div className="bg-white shadow-lg p-10 max-w-md w-full">
                <h1 className="text-3xl font-semibold text-center text-[#403F3F] mb-6">Login to Your Account</h1>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* 🔹 Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#F3F3F3] px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* 🔹 Password Field */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className='relative'>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                {...register("password")}
                                className="w-full bg-[#F3F3F3] px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>

                    {/* 🔹 Forgot Password Link */}
                    <div className="text-sm text-gray-600">
                        <button
                            type="button"
                            onClick={handleForgetPassBtn}
                            className="label-text-alt text-orange-500 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* 🔹 Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-xl font-semibold text-white py-2 mt-1 hover:bg-gray-800 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* 🔹 Divider */}
                <div className="text-center my-4">
                    <span className="text-gray-600">or login with</span>
                </div>

                {/* 🔹 Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 font-semibold border-2 py-2 w-full hover:bg-slate-900 hover:text-white justify-center text-orange-500"
                >
                    <FcGoogle className="text-3xl" /> Login With Google
                </button>

                {/* 🔹 Register Link */}
                <div className="text-center mt-6 text-gray-600">
                    Don’t have an account?{" "}
                    <Link to={"/register"} state={location.state} className="text-orange-500 font-medium hover:underline">
                        Register here
                    </Link>
                </div>

                <Toaster />
            </div>
        </div>
    );
};

export default Login;
