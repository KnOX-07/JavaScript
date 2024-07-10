import React, { useState, useMemo } from "react";

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const products = useMemo(() => [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Mango" },
        { id: 5, name: "Pineapple" },
    ], []);

    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, products]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <center>
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </center>
        </div>
    );
};

export default ProductList;