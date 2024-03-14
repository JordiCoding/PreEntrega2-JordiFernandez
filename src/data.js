// data.js

import manzana from './assets/Manzana.png'; // Importa la primera imagen
import platano from './assets/platano.png'; // Importa la primera imagen



const cardsData = [
    { 
      id: 1,
      title: 'Manzana Fuji',
      description: 'Manzana de origen japonés, conocida por su sabor dulce y crujiente. Perfecta para comer sola o para usar en ensaladas y postres.',
      price: 10.99,
      image: manzana
    },

    { 
      id: 2,
      title: ' Plátano',
      description: 'Fruta de cáscara amarilla fácil de pelar, con un sabor dulce y textura cremosa. Rica en potasio y vitaminas, ideal como snack saludable.',
      price: 12.99,
      image: platano
    },

    { 
        id: 3,
        title: 'Naranja Valencia',
        description: ' Naranja de pulpa jugosa y sabor dulce, con un toque de acidez. Excelente fuente de vitamina C, perfecta para exprimir zumo fresco.',
        price: 12.99,
        image: 'https://via.placeholder.com/150'
      },

      { 
        id: 4,
        title: 'Uva Red Globe',
        description: 'Uvas grandes y jugosas de color rojo intenso, con un sabor dulce y ligeramente ácido. Deliciosas como tentempié o para añadir a ensaladas de frutas.',
        price: 12.99,
        image: 'https://via.placeholder.com/150'
      },

      { 
        id: 5,
        title: ' Piña Golden',
        description: 'Piña tropical de pulpa dorada y jugosa, con un sabor dulce y refrescante. Rica en vitamina C y enzimas digestivas, perfecta para comer sola o en ensaladas.',
        price: 12.99,
        image: 'https://via.placeholder.com/150'
      },

      { 
        id: 6,
        title: 'Mango Kent',
        description: 'Mango de origen hindú, con una pulpa suave y dulce, y un aroma exótico. Ideal para comer fresco, en batidos o como ingrediente en platos tropicales.',
        price: 12.99,
        image: 'https://via.placeholder.com/150'
      },

    
    // Agrega más objetos con la información de cada elemento
  ];
  
  export default cardsData;