import React from 'react';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={product.inStock ? 'inStockClass' : 'outOfStockClass'}>
      <h2>{product.name}</h2>

      <p>Price: ${product.price}</p>

      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;