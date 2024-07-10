import React, { useState, useCallback } from "react";

const FetchDataButton = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            if (!response.ok) {
                throw new Error("Network response was not ok!");
            }
            const data = await response.json();
            setData(data.slice(0, 10)); // Limit to 10 items
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <div>
            <button onClick={fetchData} disabled={loading}>
                {loading ? "Loading..." : "Fetch Data"}
            </button>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchDataButton;