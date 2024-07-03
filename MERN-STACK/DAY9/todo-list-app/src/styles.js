const styles = {
    container: {
        margin: "0 auto",
        padding: "20px",
        maxWidth: "400px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    header: {
        fontSize: "2em",
        marginBottom: "20px",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
    },
    input: {
        flexGrow: 1,
        padding: "10px",
        marginRight: "10px",
        fontSize: "1em",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1em",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer",
    },
    list: {
        listStyleType: "none",
        padding: 0,
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
    },
    title: {
        cursor: "pointer",
    },
    editButton: {
        marginLeft: "10px",
        padding: "5px 10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    deleteButton: {
        marginLeft: "10px",
        padding: "5px 10px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default styles;