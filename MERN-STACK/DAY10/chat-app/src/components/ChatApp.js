import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    useEffect(() => {
        axios.get("http://localhost:8000/messages")
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error("An error occured!", error);
            });

        const interval = setInterval(() => {
            axios.get("http://localhost:8000/messages")
                .then(response => {
                    setMessages(response.data);
                })
                .catch(error => {
                    console.error("An error occured!", error);
                });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = () => {
        if (!newMessage) return;

        axios.post("http://localhost:8000/messages", { text: newMessage })
            .then(response => {
                setMessages([...messages, response.data]);
                setNewMessage("");
            })
            .catch(error => {
                console.error("An error occured!", error);
            });
    };

    return (
        <div>
            <h1>Chat App</h1>
            <button onClick={isAuthenticated ? logout : login}>
                {isAuthenticated ? "Logout" : "Login"}
            </button>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message.text}
                    </div>
                ))}
            </div>
            {isAuthenticated && (
                <div className="new-message">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};

export default ChatApp;
