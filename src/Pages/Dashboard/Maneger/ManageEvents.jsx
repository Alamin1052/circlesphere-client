import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Component/Loading";

const ManagerEvents = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    // Fetch events for manager's clubs
    const { data: events = [], isLoading, refetch } = useQuery({
        queryKey: ["events"],
        queryFn: async () => {
            const res = await axiosSecure.get("/events/manager");
            return res.data;
        },
    });

    const handleCreateEvent = async (data) => {
        try {
            const eventData = {
                title: data.title,
                description: data.description,
                eventDate: data.eventDate,
                location: data.location,
                isPaid: data.isPaid === "paid",
                eventFee: data.isPaid === "paid" ? Number(data.eventFee) : 0,
                maxAttendees: data.maxAttendees ? Number(data.maxAttendees) : undefined,
            };

            const res = await axiosSecure.post("/events", eventData);
            if (res.data.insertedId) {
                reset();
                refetch();
                setOpenCreate(false);
                Swal.fire("Success", "Event created successfully", "success");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateEvent = async (data) => {
        try {
            const updatedData = {
                title: data.title,
                description: data.description,
                eventDate: data.eventDate,
                location: data.location,
                isPaid: data.isPaid === "paid",
                eventFee: data.isPaid === "paid" ? Number(data.eventFee) : 0,
                maxAttendees: data.maxAttendees ? Number(data.maxAttendees) : undefined,
            };

            const res = await axiosSecure.patch(`/events/${selectedEvent._id}`, updatedData);
            if (res.data.modifiedCount > 0) {
                refetch();
                setOpenEdit(false);
                Swal.fire("Updated!", "Event updated successfully", "success");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteEvent = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This event will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        });

        if (confirm.isConfirmed) {
            await axiosSecure.delete(`/events/${id}`);
            refetch();
            Swal.fire("Deleted!", "Event has been deleted.", "success");
        }
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Events</h1>
                <button
                    onClick={() => setOpenCreate(true)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm"
                >
                    + Create Event
                </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((ev) => (
                    <div key={ev._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mt-2">{ev.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            {ev.description?.length > 50
                                ? ev.description.substring(0, 50) + "..."
                                : ev.description}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Location: {ev.location}</p>
                        <p className="text-sm text-gray-600">
                            Date: {new Date(ev.eventDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-600">Fee: {ev.isPaid ? ev.eventFee + " BDT" : "Free"}</p>
                        {ev.maxAttendees && (
                            <p className="text-sm text-gray-600">Max Attendees: {ev.maxAttendees} People</p>
                        )}


                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => {
                                    setSelectedEvent(ev);
                                    setOpenEdit(true);
                                }}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteEvent(ev._id)}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= CREATE EVENT MODAL ================= */}
            {openCreate && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Event</h2>
                        <form onSubmit={handleSubmit(handleCreateEvent)} className="flex flex-col gap-3">
                            <input
                                placeholder="Event Title"
                                className="border p-2 rounded-lg"
                                {...register("title", { required: true })}
                            />
                            <input
                                placeholder="Location"
                                className="border p-2 rounded-lg"
                                {...register("location", { required: true })}
                            />
                            <input
                                type="date"
                                className="border p-2 rounded-lg"
                                {...register("eventDate", { required: true })}
                            />
                            <textarea
                                rows="3"
                                placeholder="Description"
                                className="border p-2 rounded-lg"
                                {...register("description", { required: true })}
                            />

                            <div className="flex gap-4 items-center">
                                <label>
                                    <input type="radio" value="free" {...register("isPaid")} /> Free
                                </label>
                                <label>
                                    <input type="radio" value="paid" {...register("isPaid")} /> Paid
                                </label>
                            </div>

                            {watch("isPaid") === "paid" && (
                                <input
                                    type="number"
                                    placeholder="Event Fee"
                                    className="border p-2 rounded-lg"
                                    {...register("eventFee", { required: true })}
                                />
                            )}

                            <input
                                type="number"
                                placeholder="Max Attendees (optional)"
                                className="border p-2 rounded-lg"
                                {...register("maxAttendees")}
                            />

                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpenCreate(false)}
                                    className="px-4 py-2 bg-gray-200 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ================= EDIT EVENT MODAL ================= */}
            {openEdit && selectedEvent && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Event</h2>
                        <form onSubmit={handleSubmit(handleUpdateEvent)} className="flex flex-col gap-3">
                            <input
                                defaultValue={selectedEvent.title}
                                placeholder="Event Title"
                                className="border p-2 rounded-lg"
                                {...register("title", { required: true })}
                            />
                            <input
                                defaultValue={selectedEvent.location}
                                placeholder="Location"
                                className="border p-2 rounded-lg"
                                {...register("location", { required: true })}
                            />
                            <input
                                type="date"
                                defaultValue={selectedEvent.eventDate.slice(0, 10)}
                                className="border p-2 rounded-lg"
                                {...register("eventDate", { required: true })}
                            />
                            <textarea
                                rows="3"
                                defaultValue={selectedEvent.description}
                                placeholder="Description"
                                className="border p-2 rounded-lg"
                                {...register("description", { required: true })}
                            />

                            <div className="flex gap-4 items-center">
                                <label>
                                    <input
                                        type="radio"
                                        value="free"
                                        {...register("isPaid")}
                                        defaultChecked={!selectedEvent.isPaid}
                                    /> Free
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="paid"
                                        {...register("isPaid")}
                                        defaultChecked={selectedEvent.isPaid}
                                    /> Paid
                                </label>
                            </div>

                            {watch("isPaid") === "paid" && (
                                <input
                                    type="number"
                                    defaultValue={selectedEvent.eventFee}
                                    placeholder="Event Fee"
                                    className="border p-2 rounded-lg"
                                    {...register("eventFee", { required: true })}
                                />
                            )}

                            <input
                                type="number"
                                defaultValue={selectedEvent.maxAttendees}
                                placeholder="Max Attendees (optional)"
                                className="border p-2 rounded-lg"
                                {...register("maxAttendees")}
                            />

                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpenEdit(false)}
                                    className="px-4 py-2 bg-gray-200 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerEvents;
