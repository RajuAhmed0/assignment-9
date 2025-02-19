import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((userInfo) => {
                console.log("User created:", userInfo);

                profileUpdate(data.name, data.photoURL)
                    .then(() => {
                        console.log("Profile updated successfully");
                        toast.success("Account created successfully!", { position: "top-right" });

                        // Delay navigation so the user can see the success message
                        setTimeout(() => {
                            navigate("/login");
                        }, 1500);
                    })
                    .catch((err) => {
                        console.error("Profile update error:", err);
                        toast.error("Profile update failed. Try again.", { position: "top-right" });
                    });

            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered!", { position: "top-right" });
                } else {
                    console.error("Registration error:", error);
                    toast.error("Registration failed. Please try again.", { position: "top-right" });
                }
            });
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
            <div className="bg-white rounded-lg shadow-2xl p-10 w-[450px]">
                <h1 className="text-3xl font-semibold text-center text-[#403F3F] mb-8">Register for an Account</h1>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                        <input
                            type="url"
                            {...register("photoURL")}
                            className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className='relative'>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                {...register("password", {
                                    required: 'Password is required', minLength: {
                                        value: 6, message: 'Password must be 6 characters'
                                    },
                                    maxLength: {
                                        value: 8, message: 'Password must be 8 characters or less'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{6,8}$/, message: 'Password must be include one uppercase letter,number,and special character'
                                    }
                                })}
                                className="w-full bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your password"
                            />

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPasswordVisible(!passwordVisible);
                                }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                    </div>
                    {errors.password && <p className="text-orange-500 text-sm">{errors.password.message}</p>}

                    <button
                        type="submit"
                        value="Register"
                        className="w-full bg-orange-600 text-xl font-semibold text-white py-3 rounded-lg hover:bg-black transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-orange-500 font-medium hover:underline">
                        Login here
                    </Link>
                </div>

                <Toaster />
            </div>
        </div>
    );
};

export default Register;
