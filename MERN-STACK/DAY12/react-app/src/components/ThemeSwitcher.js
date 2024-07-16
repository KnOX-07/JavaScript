import React from "react";
import useLocalStorage from "./useLocalStorage";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <div>
            <h2>Theme Switcher</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
        </div>
    );
};

export default ThemeSwitcher;