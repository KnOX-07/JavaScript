import React from "react";
import { useAuthDispatch } from "../context/AuthContext";

const Logout = () => {
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;