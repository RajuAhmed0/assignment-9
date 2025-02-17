import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
     
        if (email === 'test@example.com' && password === 'password') {
            toast.success('Login Successful!');
            navigate('/home'); 
        } else {
            toast.error('Invalid credentials. Please try again.');
        }
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
                <div className="bg-white rounded-lg shadow-lg p-10 w-[380px]">
                    <h1 className="text-3xl font-semibold text-center text-[#403F3F] mb-6">Login to Your Account</h1>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">
                                <a href="/forgot-password" className="hover:underline">Forgot Password?</a>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full bg-orange-500 text-xl font-semibold text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-center my-4">
                        <span className="text-gray-600">or login with</span>
                    </div>

                    <div className="social-login mb-4">
                        <GoogleLogin
                            onSuccess={(response) => {
                                console.log('Google login success:', response);
                               
                                navigate('/home');
                            }}
                            onError={() => {
                                toast.error('Google login failed.');
                            }}
                            shape="rectangular"
                            size="large"
                        />
                    </div>

                    <div className="text-center mt-6 text-gray-600">
                        Don’t have an account?{" "}
                        <Link to={"/register"} className="text-red-500 font-medium hover:underline">
                            Register here
                        </Link>
                    </div>

                    <Toaster />
                </div>
            </div>
        </GoogleOAuthProvider>

    );
};

export default Login;
