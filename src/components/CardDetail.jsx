import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import './styles.css';

function CardDetail({ id, title, description, price, image, category }) {
  const { addToCart, cartItems, removeFromCart } = useContext(UserContext);

  const quantityInCart = cartItems.reduce((total, item) => {
    if (item.id === id) {
      return total + item.quantity;
    }
    return total;
  }, 0);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>Category: {category}</p>
        <p>{description}</p>
        <p><b>${price}</b></p>
        <div className="selector">
        <button className="remove-button" onClick={() => removeFromCart(id)}>-</button>
        <p>{quantityInCart}</p>
        <button className="add-button" onClick={() => addToCart({ id, title, description, price, image })}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
