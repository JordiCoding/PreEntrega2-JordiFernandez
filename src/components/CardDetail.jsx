import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import './styles.css';

function CardDetail({ id, title, description, price, image }) {
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
        <p>{description}</p>
        <p><b>${price}</b></p>
        <p>Quantity in cart: {quantityInCart}</p>
        <button className="add-button" onClick={() => addToCart({ id, title, description, price, image })}>Add to Cart</button>
        <button className="remove-button" onClick={() => removeFromCart(id)}>Remove from Cart</button>
        
      </div>
    </div>
  );
}

export default CardDetail;
