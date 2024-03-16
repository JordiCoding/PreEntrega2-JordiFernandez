import React, { createContext, useContext, useState } from 'react';
import '../App.css';
import '../components/styles.css';
import CardDetail from '../components/CardDetail'; 
import CartPage from '../components/CartPage'; // Importa el componente de la página del carrito
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
              addToCart={() => addToCart(card)} 
            />
          ))}
        </div>
        <CartPage cartItems={cartItems} /> 
      </>
  );
}

export default Home;