import React, { useState, useEffect } from "react";
import { getAll, create, update, remove } from "../services/api";

const CabSection = () => {
    const [cabs, setCabs] = useState([]);
    const [newCab, setNewCab] = useState({ name: "", cabNo: "" });

    useEffect(() => {
        fetchCabs();
    }, []);

    const fetchCabs = async () => {
        try {
            const response = await getAll("cabs");
            setCabs(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreate = async () => {
        try {
            await create("cabs", newCab);
            fetchCabs();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            await update("cabs", id, { name: "Updated Name" });
            fetchCabs();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await remove("cabs", id);
            fetchCabs();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Cabs</h1>
            <input
                type="text"
                placeholder="Cab Name"
                value={newCab.name}
                onChange={(e) => setNewCab({ ...newCab, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Cab No"
                value={newCab.cabNo}
                onChange={(e) => setNewCab({ ...newCab, cabNo: e.target.value })}
            />
            <button onClick={handleCreate}>Add Cab</button>
            <ul>
                {cabs.map((cab) => (
                    <li key={cab.id}>
                        {cab.name} ({cab.cabNo})
                        <button onClick={() => handleUpdate(cab.id)}>Update</button>
                        <button onClick={() => handleDelete(cab.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CabSection;
