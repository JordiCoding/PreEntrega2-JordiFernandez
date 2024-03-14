// CartPage.jsx
import React from 'react';

function CartPage({ cartItems }) {

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

  return (
    <div>
      <h2>Carrito de compras</h2>
      <p>Cantidad total de productos en el carrito: {totalQuantity}</p>
      <ul>
        {groupedItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;