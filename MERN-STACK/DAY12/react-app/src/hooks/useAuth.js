import { useState, useEffect } from "react";

const useAuth = () => {
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

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;