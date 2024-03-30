import React from 'react';
import './styles.css';

function ProductDescription({ description }) {
  return (
    <div className="product-description">
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;