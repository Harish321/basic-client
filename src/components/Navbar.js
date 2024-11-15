import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/cabs">Cabs</Link></li>
                <li><Link to="/drivers">Drivers</Link></li>
                <li><Link to="/trips">Trips</Link></li>
                <li><Link to="/fuel-logs">Fuel Logs</Link></li>
                <li><Link to="/bills">Bills</Link></li>
                <li><Link to="/daily-entries">Daily Entries</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
