import React from "react";

const Item = ({ item, onDelete }) => {
    return (
        <center>
            <li>
                {item.name}
                <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
        </center>
    );
};

export default React.memo(Item);