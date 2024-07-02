import React from 'react';
import ProductList from './components/ProductList';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150x150.png/a3df49/000000?Text=150x150',
    description: 'This is a great product.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/150x150.png/a3df49/000000?Text=150x150',
    description: 'This is also a great product.',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 79.99,
    imageUrl: 'https://via.placeholder.com/150x150.png/a3df49/000000?Text=150x150',
    description: 'This is another great product.',
  }];

const App = () => {
  return (
    <div className="app">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;