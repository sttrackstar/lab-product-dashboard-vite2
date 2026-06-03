import React, { useState } from 'react';
import ProductList from './components/ProductList';

const { JSDOM } = require('jsdom')

const App = () => {
  // IMPORTANT: match test data (includes Phone)
  const initialProducts = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true },
  { id: 2, name: 'Phone', price: 800, inStock: false },
  { id: 3, name: 'Keyboard', price: 80, inStock: true },
  { id: 4, name: 'Monitor', price: 300, inStock: false },
  { id: 5, name: 'Tablet', price: 500, inStock: true }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showInStock, setShowInStock] = useState(false);

  // remove product (IMPORTANT for test)
  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = showInStock
    ? products.filter((p) => p.inStock)
    : products;

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowInStock(false)}>
        Show All Products
      </button>

      <button onClick={() => setShowInStock(true)}>
        Show In-Stock Products
      </button>

      <ProductList products={filteredProducts} onRemove={removeProduct} />
    </div>
  );
};

export default App;