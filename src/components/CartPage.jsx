import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import './styles.css'; // Suponiendo que tienes un archivo de estilos CSS para este componente

function CartPage() {
  const { cartItems, removeFromCart } = useContext(UserContext);

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calcular el precio total del carrito
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="card">
      <div className="card-content">
        <h2>Carrito de compras</h2>
        <p className="total-quantity">Cantidad total de productos en el carrito: {totalQuantity}</p>
        <p className="total-quantity">Precio total: <b>${totalPrice.toFixed(2)}</b></p>
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.title}</span>
              <span className="price">${item.price.toFixed(2)}</span>
              <span className="quantity">x {item.quantity}</span>
              <span className="subtotal">${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartPage;

