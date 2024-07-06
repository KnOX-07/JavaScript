import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const UserProfile = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [profile, setProfile] = useState({ name: "", email: "", bio: "" });

    useEffect(() => {
        if (isLoggedIn) {
            axios.get("https://jsonplaceholder.typicode.com/users/1")
                .then(response => {
                    const userData = response.data;
                    setProfile({ name: userData.name, email: userData.email, bio: userData.company.bs });
                })
                .catch(error => console.error("Error fetching the user profile data:", error));
        }
    }, [isLoggedIn]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", profile)
            .then(response => {
                console.log("Profile updated:", response.data);
            })
            .catch(error => console.error("Error updating the user profile data:", error));
    };

    if (!isLoggedIn) {
        return <p>Please log in to view your profile!</p>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={profile.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={profile.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Bio:
                        <input type="text" name="bio" value={profile.bio} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;