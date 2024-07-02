import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, imageUrl, description }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">₹{price.toFixed(2)}</p>
                <p className="product-description">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;