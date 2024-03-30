import React, { useContext } from 'react';
import '../App.css';
import '../components/styles.css';
import CardDetail from '../components/CardDetail'; 
import CartPage from '../components/CartPage'; 
import { UserContext } from '../store/UserContext';
import { cardsData } from '../data';

function Home() {
  const { cartItems } = useContext(UserContext);

  // Filtrar datos por categoría 'fruta'
  const filteredCards = cardsData.filter(card => card.category === 'fruta');
  console.log(filteredCards);

  return (
    <>
      <div className="grid-container">
        {filteredCards.map((card) => (
          <CardDetail key={card.id} {...card} />
        ))}
      </div>
      <CartPage cartItems={cartItems} />
    </>
  );
}

export default Home;
