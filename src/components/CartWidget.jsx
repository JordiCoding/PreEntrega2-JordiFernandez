// CartWidget.jsx
import React from 'react';
import cartIcon from '../assets/carts.png'; 

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart Icon" />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );        
};

export default CartWidget;