import React, { createContext, useContext, useState } from 'react';
import '../App.css';
import '../components/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CardDetail from '../components/CardDetail'; 
import CartPage from '../components/CartPage'; // Importa el componente de la página del carrito
import CartSummaryPage from '../components/CartSummaryPage'
import cardsData from '../data'; // Importa info de las cards
import { UserContext } from '../store/UserContext';

function Home() {
  const {cartItems, setCartItems } = useContext(UserContext);

  const addToCart = (product) => {
    setCartItems(prevProducts => [...prevProducts, product]);
  };

  return (
      <>
     
        <div className="grid-container">
          {cardsData.map((card) => (
            <CardDetail 
              key={card.id} 
              title={card.title} 
              description={card.description} 
              price={card.price} 
              image={card.image} 
              addToCart={() => addToCart(card)} // Utiliza addToCart para agregar productos al carrito
            />
          ))}
        </div>
        <CartPage cartItems={cartItems} /> {/* Renderiza CartPage debajo de grid-container */}
      </>
  );
}

export default Home;