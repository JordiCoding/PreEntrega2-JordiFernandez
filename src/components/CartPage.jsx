// CartPage.jsx
import React from 'react';


function CartPage({ cartItems}) {
  // Función para agrupar los productos por tipo y calcular la cantidad total y el precio total de cada tipo
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.title === item.title);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cartItems.reduce((total, item) => total + 1, 0);

  // Calcular el precio total del carrito
  const totalPrice = groupedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="card">
      <div className="card-content">
        <h2>Carrito de compras</h2>
        <p className="total-quantity">Cantidad total de productos en el carrito: {totalQuantity}</p>
        <p className="total-quantity">Precio total: <b>${totalPrice.toFixed(2)}</b></p>
        <ul className="cart-items">
          {groupedItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.title}</span>
              <span className="price">${item.price.toFixed(2)}</span>
              <span className="quantity">x {item.quantity}</span>
              <span className="subtotal">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartPage;

