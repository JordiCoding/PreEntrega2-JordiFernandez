
import React from 'react';
import CartCounter from './CartCounter';
import cartIcon from '../assets/carts.png'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart Icon" />
      <span className="cart-count"><CartCounter /></span>
    </div>
  );        
};

export default CartWidget;