import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const list = cartItems;
    const index = list.findIndex(item => item.id === product.id);
  
    if (index !== -1) {
      const update = [...list];
      update[index].quantity += 1;
      setCartItems(update);
    } else {
      setCartItems(prevProducts => [...prevProducts, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    const list = cartItems;
    const index = list.findIndex(item => item.id === productId);
  
    if (index !== -1) {
      if (list[index].quantity === 1) {
        list.splice(index, 1); // Remove the item if its quantity is 1
      } else {
        list[index].quantity -= 1; // Decrease quantity by 1
      }
      setCartItems([...list]);
    }
  };

  return (
    <UserContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
};
