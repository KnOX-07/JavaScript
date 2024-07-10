import React, { useState } from "react";
import { useAuthDispatch } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const dispatch = useAuthDispatch();

    const handleLogin = () => {
        const user = { name: username };
        dispatch({ type: "LOGIN", payload: user });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;