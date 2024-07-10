import React, { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();

const initialState = "light";

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return state === "light" ? "dark" : "light";
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ theme: state, toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }) }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);