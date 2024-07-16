import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(username);
        navigate("/dashboard");
    };

    return (
        <center>
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </center>
    );
};

export default LoginForm;