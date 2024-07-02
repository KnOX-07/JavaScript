import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductList;