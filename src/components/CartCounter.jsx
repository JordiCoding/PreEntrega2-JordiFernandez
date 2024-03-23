import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';

const CartCounter = () => {
  const { cartItems } = useContext(UserContext);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <span>{cartCount}</span>
  );
};

export default CartCounter;