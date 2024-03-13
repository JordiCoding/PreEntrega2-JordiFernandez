// CardDetail.jsx
import React from 'react';
import './styles.css';

function CardDetail({ title, description, price, image, addToCart }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><b> ${price}</b></p>
        <button className="button" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default CardDetail;