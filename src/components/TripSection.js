import React, { useState, useEffect } from "react";
import { getAll, create, update, remove } from "../services/api";

const TripSection = () => {
    const [trips, setTrips] = useState([]);
    const [newTrip, setNewTrip] = useState({
        startLocation: "",
        endLocation: "",
        fare: 0,
    });

    useEffect(() => {
        fetchTrips();
    }, []);

    const fetchTrips = async () => {
        try {
            const response = await getAll("trips");
            setTrips(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreate = async () => {
        try {
            await create("trips", newTrip);
            fetchTrips();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            await update("trips", id, { fare: 100 });
            fetchTrips();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await remove("trips", id);
            fetchTrips();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Trips</h1>
            <input
                type="text"
                placeholder="Start Location"
                value={newTrip.startLocation}
                onChange={(e) => setNewTrip({ ...newTrip, startLocation: e.target.value })}
            />
            <input
                type="text"
                placeholder="End Location"
                value={newTrip.endLocation}
                onChange={(e) => setNewTrip({ ...newTrip, endLocation: e.target.value })}
            />
            <input
                type="number"
                placeholder="Fare"
                value={newTrip.fare}
                onChange={(e) => setNewTrip({ ...newTrip, fare: e.target.value })}
            />
            <button onClick={handleCreate}>Add Trip</button>
            <ul>
                {trips.map((trip) => (
                    <li key={trip.id}>
                        {trip.startLocation} to {trip.endLocation} - ${trip.fare}
                        <button onClick={() => handleUpdate(trip.id)}>Update</button>
                        <button onClick={() => handleDelete(trip.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TripSection;
