import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevProducts => [...prevProducts, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingProductIndex = updatedCartItems.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
      if (updatedCartItems[existingProductIndex].quantity === 1) {
        updatedCartItems.splice(existingProductIndex, 1); // Remove the item if its quantity is 1
      } else {
        updatedCartItems[existingProductIndex].quantity -= 1; // Decrease quantity by 1
      }
      setCartItems(updatedCartItems);
    }
  };

  return (
    <UserContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
};
