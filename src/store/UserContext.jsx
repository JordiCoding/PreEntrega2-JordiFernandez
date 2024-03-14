// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  return (
    <UserContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </UserContext.Provider>
  );
};
