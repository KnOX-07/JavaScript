import React from "react";
import useFetch from "../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const UserList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return (
            <Box display="flex" flexDirection="column" justifyContent="top" alignItems="left" height="100vh">
                <CircularProgress color="success" />
                <Typography variant="h6" mt={2}>Loading...</Typography>
            </Box>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;