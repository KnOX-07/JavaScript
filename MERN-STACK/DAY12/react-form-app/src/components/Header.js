import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, handleLogout }) => {
    return (
        <header>
            <nav>
                <ul>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    )
                        : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;