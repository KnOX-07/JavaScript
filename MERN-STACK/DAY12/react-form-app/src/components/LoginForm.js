import React from "react";
import useForm from "../useForm";
const LoginForm = ({ handleLogin }) => {
    const { inputs, handleInputChange, handleSubmit } = useForm(handleLogin);

    return (
        <form onSubmit={handleSubmit}>
            Username:
            <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={inputs.username || ""}
                onChange={handleInputChange}
                required
            /><br></br>
            Password:
            <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={inputs.password || ""}
                onChange={handleInputChange}
                required
            /><br></br>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;