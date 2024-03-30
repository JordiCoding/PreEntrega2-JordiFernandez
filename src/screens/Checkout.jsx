import React, { useContext, useState } from 'react';
import '../App.css';
import '../components/styles.css';
import NavBar from '../components/NavBar';
import { UserContext } from '../store/UserContext';
import CartPage from '../components/CartPage';


function Checkout() {
  const {cartItems, setCartItems } = useContext(UserContext);
  
  return (
    <>

        <div>

        <CartPage cartItems={cartItems} /> 
        </div>

    </>
  );
}

export default Checkout;