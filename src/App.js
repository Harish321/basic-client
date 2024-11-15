import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CabSection from "./components/CabSection";
import DriverSection from "./components/DriverSection";
import TripSection from "./components/TripSection";
// import FuelLogSection from "./components/FuelLogSection";
// import BillSection from "./components/BillSection";
// import DailyEntrySection from "./components/DailyEntrySection";
// import TransactionSection from "./components/TransactionSection";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cabs" element={<CabSection />} />
                <Route path="/drivers" element={<DriverSection />} />
                <Route path="/trips" element={<TripSection />} />
                {/* <Route path="/fuel-logs" element={<FuelLogSection />} />
                <Route path="/bills" element={<BillSection />} />
                <Route path="/daily-entries" element={<DailyEntrySection />} />
                <Route path="/transactions" element={<TransactionSection />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
