import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import './styles.css';
import CartWidget from './CartWidget';
import { UserContext } from '../store/UserContext';

const NavBar = ({ cartCount }) => {
  const {cartItems, setCartItems } = useContext(UserContext);


  return (
    <header className="NavHeader">
      <nav>
       <ul>
         <li>
           <Link to="/">Frutas</Link>
         </li>
         <li>
           <Link to="/Verduras">Verduras</Link>
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