import React, { useContext } from 'react';
import '../App.css';
import '../components/styles.css';
import CardDetail from '../components/CardDetail'; 
import CartPage from '../components/CartPage'; // Importa el componente de la página del carrito
import cardsData from '../data'; // Importa info de las cards
import { UserContext } from '../store/UserContext';


function Home() {
  const { cartItems } = useContext(UserContext);

  return (
    <>
      <div className="grid-container">
        {cardsData.map((card) => (
          <CardDetail
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            image={card.image}
          />
        ))}
      </div>
      <CartPage cartItems={cartItems} />
    </>
  );
}

export default Home;
