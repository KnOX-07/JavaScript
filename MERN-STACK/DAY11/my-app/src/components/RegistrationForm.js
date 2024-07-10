import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/formReducer";

const RegistrationForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "SUBMIT" });
        if (!Object.values(state.errors).some(error => error)) {
            console.log("Form submitted!", state);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {["username", "email", "password"].map((field) => (
                <div key={field}>
                    <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                    <input type={field === "password" ? "password" : "text"} name={field} value={state[field]} onChange={handleChange} />
                    {state.errors[field] && <span>{state.errors[field]}</span>}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;