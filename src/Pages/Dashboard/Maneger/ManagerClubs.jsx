import React, { useState } from "react";

const ManagerClubs = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="p-6">

            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Clubs</h1>
                <button
                    onClick={() => setOpenCreate(true)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm"
                >
                    + Create Club
                </button>
            </div>

            {/* Clubs List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Club Card */}
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1531384441132-6d1c7a235f6c"
                        alt="banner"
                        className="w-full h-32 rounded-lg object-cover"
                    />

                    <h2 className="text-xl font-semibold text-gray-800 mt-4">
                        Tech Innovators Club
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                        Location: Dhaka
                    </p>

                    <p className="text-sm text-gray-600">
                        Membership Fee: 300 BDT
                    </p>

                    <p className="text-sm text-indigo-600 mt-2">
                        Category: Technology
                    </p>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setOpenEdit(true)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                            Edit
                        </button>

                        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Duplicate card for static UI */}
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                        alt="banner"
                        className="w-full h-32 rounded-lg object-cover"
                    />

                    <h2 className="text-xl font-semibold text-gray-800 mt-4">
                        Cultural Friends Club
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                        Location: Rajshahi
                    </p>

                    <p className="text-sm text-gray-600">
                        Membership Fee: 200 BDT
                    </p>

                    <p className="text-sm text-rose-600 mt-2">
                        Category: Cultural
                    </p>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setOpenEdit(true)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                            Edit
                        </button>

                        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* =================== CREATE MODAL =================== */}
            {openCreate && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">

                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Create New Club
                        </h2>

                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Club Name"
                                className="border p-2 rounded-lg"
                            />

                            <input
                                placeholder="Location"
                                className="border p-2 rounded-lg"
                            />

                            <input
                                placeholder="Membership Fee"
                                type="number"
                                className="border p-2 rounded-lg"
                            />

                            <input
                                placeholder="Category"
                                className="border p-2 rounded-lg"
                            />

                            <textarea
                                placeholder="Description"
                                rows="3"
                                className="border p-2 rounded-lg"
                            />

                            <div>
                                <label className="text-sm text-gray-600">Banner Image</label>
                                <input type="file" className="mt-1" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-3">
                            <button
                                onClick={() => setOpenCreate(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                                Create
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* =================== EDIT MODAL =================== */}
            {openEdit && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">

                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Edit Club
                        </h2>

                        <div className="flex flex-col gap-3">
                            <input
                                defaultValue="Tech Innovators Club"
                                className="border p-2 rounded-lg"
                            />

                            <input
                                defaultValue="Dhaka"
                                className="border p-2 rounded-lg"
                            />

                            <input
                                defaultValue={300}
                                type="number"
                                className="border p-2 rounded-lg"
                            />

                            <input
                                defaultValue="Technology"
                                className="border p-2 rounded-lg"
                            />

                            <textarea
                                defaultValue="This is a sample description..."
                                rows="3"
                                className="border p-2 rounded-lg"
                            />

                            <div>
                                <label className="text-sm text-gray-600">Update Banner Image</label>
                                <input type="file" className="mt-1" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-3">
                            <button
                                onClick={() => setOpenEdit(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default ManagerClubs;
