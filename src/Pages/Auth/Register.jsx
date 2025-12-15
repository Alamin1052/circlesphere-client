import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegistration = (data) => {

        const profileImg = data.photoURL[0];

        registerUser(data.email, data.password)
            .then(() => {

                // 1. store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                // 2. send the photo to store and get the ul
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            displayName: data.name,
                            email: data.email,
                            photoURL: photoURL

                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database');
                                }
                            })


                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                toast.success("Registration successful 🎉");
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))
                    })



            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="flex items-center justify-center p-6">

            <div className="backdrop-blur-xl bg-white/50 shadow-2xl border border-white/30 
                        rounded-2xl p-8 w-full max-w-md relative">

                {/* Soft glow circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300/50 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-300/50 rounded-full blur-3xl"></div>

                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 drop-shadow-sm">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1 text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="w-full border px-3 py-2 rounded bg-white/60 focus:bg-white outline-none"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block font-medium mb-1 text-gray-700">Photo URL</label>
                        <input
                            type="file"
                            className="file-input w-full bg-white/60 px-3 py-2 rounded border"
                            {...register("photoURL")}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1 text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full border px-3 py-2 rounded bg-white/60 focus:bg-white outline-none"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-medium mb-1 text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your Password"
                                className="w-full border px-3 py-2 rounded bg-white/60 focus:bg-white outline-none"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Minimum 6 characters",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                        message: "Must include uppercase + lowercase",
                                    },
                                })}
                            />
                            <span
                                className="absolute right-3 top-3 cursor-pointer text-sm text-blue-600 font-medium"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium 
                               hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Register
                    </button>
                    <p>Already have an account <Link
                        state={location.state}
                        className='text-blue-400 underline'
                        to="/login">Login</Link></p>
                </form>

                {/* Google Sign-in */}
                <div className="mt-6 text-center">
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
