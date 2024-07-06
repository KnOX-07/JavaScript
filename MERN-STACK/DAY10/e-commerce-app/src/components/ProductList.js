import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";
import "./ProductList.css";

const ProductList = () => {
    const { cart, addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error("Error fetching the products:", error));
    }, []);

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <div className="cart-info">
                <p>Cart: {cart.length} items</p>
            </div>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ₹{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;