import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManagerEvents = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedClub, setSelectedClub] = useState(null);

    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { refetch, isLoading, data: club = [] } = useQuery({
        queryKey: ['clubs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/club/manager');
            return res.data;
        }
    })

    const handleRegistration = async (data) => {
        try {
            const bannerImg = data.bannerImage[0];

            const formData = new FormData();
            formData.append("image", bannerImg);

            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`;

            const imgRes = await axios.post(image_API_URL, formData);
            const bannerURL = imgRes.data.data.url;

            const clubInfo = {
                clubName: data.clubName,
                location: data.location,
                membershipFee: Number(data.membershipFee),
                category: data.category,
                description: data.description,
                bannerImage: bannerURL,
            };

            const res = await axiosSecure.post("/clubs", clubInfo);

            if (res.data.insertedId) {
                reset();
                refetch()
                setOpenCreate(false);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully club created",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateClub = async (data) => {
        try {
            let bannerURL = selectedClub.bannerImage;

            if (data.bannerImage && data.bannerImage.length > 0) {
                const formData = new FormData();
                formData.append("image", data.bannerImage[0]);

                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`;
                const imgRes = await axios.post(image_API_URL, formData);
                bannerURL = imgRes.data.data.url;
            }

            const updatedClub = {
                clubName: data.clubName,
                location: data.location,
                membershipFee: Number(data.membershipFee),
                category: data.category,
                description: data.description,
                bannerImage: bannerURL,
            };

            const res = await axiosSecure.patch(
                `/clubs/${selectedClub._id}`,
                updatedClub
            );

            if (res.data.modifiedCount > 0) {
                refetch();
                setOpenEdit(false);
                Swal.fire("Updated!", "Club updated successfully", "success");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This club will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        });

        if (confirm.isConfirmed) {
            await axiosSecure.delete(`/clubs/${id}`);
            refetch();
            Swal.fire("Deleted!", "Club has been deleted.", "success");
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="p-6">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Clubs</h1>
                <button
                    onClick={() => setOpenCreate(true)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm"
                >
                    + Create Club
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {club.map((c) => (
                    <div key={c._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                        <img
                            src={c.bannerImage}
                            alt="banner"
                            className="w-full h-32 rounded-lg object-cover"
                        />

                        <h2 className="text-xl font-semibold text-gray-800 mt-4">
                            {c.clubName}
                        </h2>

                        <p className="text-sm text-gray-600 mt-1">
                            Location: {c.location}
                        </p>

                        <p className="text-sm text-gray-600">
                            Membership Fee: {c.membershipFee} BDT
                        </p>

                        <p className="text-sm text-indigo-600 mt-2">
                            Category: {c.category}
                        </p>

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => {
                                    setSelectedClub(c);
                                    setOpenEdit(true);
                                }}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(c._id)}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* =================== CREATE MODAL =================== */}
            {
                openCreate && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">

                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Create New Club
                            </h2>

                            <form
                                onSubmit={handleSubmit(handleRegistration)}
                                className="flex flex-col gap-3"
                            >
                                <input
                                    placeholder="Club Name"
                                    className="border p-2 rounded-lg"
                                    {...register("clubName", { required: true })}
                                />

                                <input
                                    placeholder="Location"
                                    className="border p-2 rounded-lg"
                                    {...register("location", { required: true })}
                                />

                                <input
                                    type="number"
                                    placeholder="Membership Fee"
                                    className="border p-2 rounded-lg"
                                    {...register("membershipFee", { required: true })}
                                />

                                <input
                                    placeholder="Category"
                                    className="border p-2 rounded-lg"
                                    {...register("category", { required: true })}
                                />

                                <textarea
                                    rows="3"
                                    placeholder="Description"
                                    className="border p-2 rounded-lg"
                                    {...register("description", { required: true })}
                                />

                                <input
                                    type="file"
                                    className="file-input w-full border"
                                    {...register("bannerImage", { required: true })}
                                />

                                <div className="flex justify-end gap-3 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpenCreate(false)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }


            {/* =================== EDIT MODAL =================== */}
            {
                openEdit && selectedClub && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">

                            <h2 className="text-xl font-semibold mb-4">Edit Club</h2>

                            <form
                                onSubmit={handleSubmit(handleUpdateClub)}
                                className="flex flex-col gap-3"
                            >
                                <input
                                    defaultValue={selectedClub.clubName}
                                    {...register("clubName", { required: true })}
                                    className="border p-2 rounded-lg"
                                />

                                <input
                                    defaultValue={selectedClub.location}
                                    {...register("location", { required: true })}
                                    className="border p-2 rounded-lg"
                                />

                                <input
                                    type="number"
                                    defaultValue={selectedClub.membershipFee}
                                    {...register("membershipFee", { required: true })}
                                    className="border p-2 rounded-lg"
                                />

                                <input
                                    defaultValue={selectedClub.category}
                                    {...register("category", { required: true })}
                                    className="border p-2 rounded-lg"
                                />

                                <textarea
                                    defaultValue={selectedClub.description}
                                    {...register("description", { required: true })}
                                    className="border p-2 rounded-lg"
                                />

                                <input
                                    type="file"
                                    {...register("bannerImage")}
                                    className="file-input w-full"
                                />

                                <div className="flex justify-end gap-3 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpenEdit(false)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                )
            }


        </div >
    );
};

export default ManagerEvents;
