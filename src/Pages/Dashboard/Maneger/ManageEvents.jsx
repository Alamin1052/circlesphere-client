import React, { useState } from "react";

const ManageEvents = () => {
    const [showForm, setShowForm] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
        <div className="p-6 md:p-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Events Management</h1>

                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    + Create Event
                </button>
            </div>

            {/* Events Table */}
            <div className="bg-white shadow border border-gray-100 rounded-lg overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">Title</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">Date</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">Location</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">Type</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-800">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* Row Example */}
                        <tr className="border-t">
                            <td className="p-4">Tech Summit</td>
                            <td className="p-4">2025-02-18</td>
                            <td className="p-4">Dhaka</td>
                            <td className="p-4">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                    Paid
                                </span>
                            </td>

                            <td className="p-4 space-x-3">
                                <button
                                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200"
                                    onClick={() => setShowForm(true)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                                    onClick={() => setShowDelete(true)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="border-t border-gray-300">
                            <td className="p-4">Building Skills Workshop</td>
                            <td className="p-4">2025-03-12</td>
                            <td className="p-4">Rajshahi</td>
                            <td className="p-4">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                    Free
                                </span>
                            </td>

                            <td className="p-4 space-x-3">
                                <button
                                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200"
                                    onClick={() => setShowForm(true)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                                    onClick={() => setShowDelete(true)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* CREATE / EDIT FORM MODAL */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
                    <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">

                        <h2 className="text-xl font-bold mb-4">Create / Edit Event</h2>

                        <div className="space-y-4">

                            <input
                                type="text"
                                placeholder="Event Title"
                                className="w-full border p-3 rounded"
                            />

                            <textarea
                                placeholder="Description"
                                className="w-full border p-3 rounded h-24"
                            />

                            <input
                                type="date"
                                className="w-full border p-3 rounded"
                            />

                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full border p-3 rounded"
                            />

                            <div className="flex gap-4">
                                <select className="w-1/2 border p-3 rounded">
                                    <option>Free</option>
                                    <option>Paid</option>
                                </select>

                                <input
                                    type="number"
                                    placeholder="Event Fee"
                                    className="w-1/2 border p-3 rounded"
                                />
                            </div>

                            <input
                                type="number"
                                placeholder="Max Attendees"
                                className="w-full border p-3 rounded"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end mt-6 gap-3">
                            <button
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* DELETE CONFIRM MODAL */}
            {showDelete && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
                    <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">

                        <h2 className="text-xl font-bold text-red-600 mb-4">Confirm Delete</h2>
                        <p className="text-gray-700 mb-6">
                            Are you sure you want to delete this event?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowDelete(false)}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ManageEvents;
