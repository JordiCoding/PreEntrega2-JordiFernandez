import React, { useContext } from 'react';
import '../App.css';
import '../components/styles.css';
import CardDetail from '../components/CardDetail'; 
import CartPage from '../components/CartPage'; // Importa el componente de la página del carrito
import { UserContext } from '../store/UserContext';
import { cardsData } from '../data'; // Importa info de las cards


function About() {

  const { cartItems } = useContext(UserContext);

  const filteredCards = cardsData.filter(card => card.category === 'verdura');
  console.log(filteredCards);

  return (
    <>
      <div className="grid-container">
        {filteredCards.map((card) => (
          <CardDetail
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            image={card.image}
            category={card.category} // Pasar la categoría al componente CardDetail
          />
        ))}
      </div>
      <CartPage cartItems={cartItems} />
    </>
  );
}

export default About;