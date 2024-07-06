import React from "react";
import { CartProvider } from "./components/CartContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;