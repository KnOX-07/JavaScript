import React from "react";
import { useAuthState } from "../context/AuthContext";

const ProtectedComponent = () => {
    const { isAuthenticated, user } = useAuthState();

    if (!isAuthenticated) {
        return <p style={{ color: "red" }}>You must be logged in to view this content!</p>;
    }

    return (
        <div>
            <h2 style={{ color: "green" }}>Protected Content</h2>
            <p>Currect user: {user.name}</p>
        </div>
    );
};

export default ProtectedComponent;