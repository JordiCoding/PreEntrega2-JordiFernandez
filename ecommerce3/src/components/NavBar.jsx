import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = ({ cartCount }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/AboutPage">About</a></li> {/* Botón para navegar a About */}
        </ul>
      </nav>
      <CartWidget cartCount={cartCount} /> {/* Pass cartCount as prop to CartWidget */}
    </header>
  );
};

export default NavBar;