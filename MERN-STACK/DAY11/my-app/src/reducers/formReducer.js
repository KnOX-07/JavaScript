export const initialState = {
    username: "",
    email: "",
    password: "",
    errors: {},
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value, errors: { ...state.errors, [action.field]: "" } };
        case "SET_ERROR":
            return { ...state, errors: { ...state.errors, [action.field]: action.error } };
        case "SUBMIT":
            const errors = {};
            if (!state.username) errors.username = "Username is required!";
            if (!state.email) errors.email = "Email is required!";
            else if (!/\S+@\S+\.\S+/.test(state.email)) errors.email = "Invalid email!";
            if (!state.password) errors.password = "Password is required!";
            return { ...state, errors };
        default:
            return state;
    }
};