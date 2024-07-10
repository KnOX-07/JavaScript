import React, { useState, useMemo } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([
        { id: 1, item: "Laptop", price: 50000 },
        { id: 2, item: "Phone", price: 15000 },
        { id: 3, item: "Tablet", price: 20000 },
    ]);

    const totalOrderValue = useMemo(() => {
        return orders.reduce((total, order) => total + order.price, 0);
    }, [orders]);

    return (
        <div>
            <h2>List of Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.item}: ₹{order.price}
                    </li>
                ))}
            </ul>
            <div>
                <p>Total Order Value: ₹{totalOrderValue}</p>
            </div>
        </div>
    );
};

export default OrderList;