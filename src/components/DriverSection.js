import React, { useState, useEffect } from "react";
import { getAll, create, update, remove } from "../services/api";

const DriverSection = () => {
    const [drivers, setDrivers] = useState([]);
    const [newDriver, setNewDriver] = useState({ name: "", licenseNo: "" });

    useEffect(() => {
        fetchDrivers();
    }, []);

    const fetchDrivers = async () => {
        try {
            const response = await getAll("drivers");
            setDrivers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreate = async () => {
        try {
            await create("drivers", newDriver);
            fetchDrivers();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            await update("drivers", id, { name: "Updated Name" });
            fetchDrivers();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await remove("drivers", id);
            fetchDrivers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Drivers</h1>
            <input
                type="text"
                placeholder="Driver Name"
                value={newDriver.name}
                onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="License No"
                value={newDriver.licenseNo}
                onChange={(e) => setNewDriver({ ...newDriver, licenseNo: e.target.value })}
            />
            <button onClick={handleCreate}>Add Driver</button>
            <ul>
                {drivers.map((driver) => (
                    <li key={driver.id}>
                        {driver.name} ({driver.licenseNo})
                        <button onClick={() => handleUpdate(driver.id)}>Update</button>
                        <button onClick={() => handleDelete(driver.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverSection;
