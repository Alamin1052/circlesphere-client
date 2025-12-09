import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // TODO: Firebase Auth createUserWithEmailAndPassword
        // TODO: Update profile (name + photoURL)
        // TODO: Save user to Firestore
        // TODO: Toast success + redirect
        reset();
    };

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

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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

                    {/* Photo URL */}
                    <div>
                        <label className="block font-medium mb-1 text-gray-700">Photo URL</label>
                        <input
                            type="file"
                            className="file-input w-full bg-white/60 px-3 py-2 rounded border"
                            {...register("photoURL")}
                        />
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
