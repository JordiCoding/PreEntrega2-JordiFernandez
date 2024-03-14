import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './NavBar.css';
import CartWidget from './CartWidget';
import { UserContext } from '../store/UserContext';

const NavBar = ({ cartCount }) => {
  const {cartItems, setCartItems } = useContext(UserContext);


  return (
    <header>
      <nav>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/checkout">Checkout</Link>
         </li>
       </ul>
     </nav>
      <CartWidget cartCount={cartItems.length} /> {/* Pass cartCount as prop to CartWidget */}
    </header>
  );
};

export default NavBar;