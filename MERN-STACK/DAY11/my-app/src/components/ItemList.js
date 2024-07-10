import React, { useState, useCallback } from "react";
import Item from "./Item";

const ItemList = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1 " },
        { id: 2, name: "Item 2 " },
        { id: 3, name: "Item 3 " },
        { id: 4, name: "Item 4 " },
        { id: 5, name: "Item 5 " },
    ]);

    const handleDelete = useCallback((id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    }, []);

    return (
        <ul>
            {items.map(item => (
                <Item key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </ul>
    );
};

export default ItemList;