import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CardDetail from './components/CardDetail'; 
import CartPage from './components/CartPage'; // Importa el componente de la página del carrito
import cardsData from './data'; // Importa info de las cards

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <Router>
      <>
        <div className="header">La Fruteria</div>
        <NavBar cartCount={cartItems.length} /> {/* Pasar cartItems como prop a NavBar */}
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
    </Router>
  );
}

export default App;