import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import Reports from "./Reports";

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="reports">Reports</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<p style={{color:"red"}}>Please select a section.</p>} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="reports" element={<Reports />} />
            </Routes>
        </div>
    );
};

export default Dashboard;