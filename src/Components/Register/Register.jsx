import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        // Password validation: at least one uppercase, one lowercase, and minimum length 6
        const upperCase = /[A-Z]/.test(password);
        const lowerCase = /[a-z]/.test(password);
        const lengthValid = password.length >= 6;

        if (!upperCase || !lowerCase || !lengthValid) {
            setPasswordError('Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long.');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            toast.error('Invalid password');
            return;
        }

        // Simulate a successful registration
        if (name && email && photoUrl && password) {
            toast.success('Registration Successful!');
            navigate('/home'); // Redirect to home page after successful registration
        } else {
            toast.error('Please fill in all fields');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
            <div className="bg-white rounded-lg shadow-2xl p-10 w-[450px]">
                <h1 className="text-3xl font-semibold text-center text-[#403F3F] mb-8">Register for an Account</h1>

                <form className="space-y-6" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

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
                        <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                        <input
                            type="url"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                            className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your photo URL"
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
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#403F3F] text-xl font-semibold text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                
                <div className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-red-500 font-medium hover:underline">
                        Register here
                    </Link>
                </div>

                <Toaster />
            </div>
        </div>
    );
};

export default Register;
