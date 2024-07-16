import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("username");
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (username) => {
        sessionStorage.setItem("username", username);
        setIsAuthenticated(true);
    };

    const logout = () => {
        sessionStorage.removeItem("username");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);