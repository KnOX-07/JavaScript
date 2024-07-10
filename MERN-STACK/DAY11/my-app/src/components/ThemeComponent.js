import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeComponent = () => {
    const { theme } = useTheme();

    const styles = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
    };

    return <div style={styles}>Current Theme: {theme}</div>;
};

export default ThemeComponent;