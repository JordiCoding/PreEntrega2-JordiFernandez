import React, { useContext, useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import { UserContext } from '../store/UserContext';
import CartPage from '../components/CartPage';


function Checkout() {
  const {cartItems, setCartItems } = useContext(UserContext);
  
  return (
    <>

        <div className="grid-container">

        <CartPage cartItems={cartItems} /> {/* Renderiza CartPage debajo de grid-container */}
        </div>

    </>
  );
}

export default Checkout;