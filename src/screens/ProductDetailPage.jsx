import React from 'react';
import '../components/styles.css';
import { useParams } from 'react-router-dom';
import { cardsData } from '../data'; 
import CardDetail from '../components/CardDetail'; 
import CartPage from '../components/CartPage';

function ProductDetailPage() {
  const { productId } = useParams();
  const productIdNumber = parseInt(productId); 
  const product = cardsData.find(product => product.id === productIdNumber);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="card-detail-container">
        <CardDetail
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
          hideLink={true} 
        />
      </div>
      <div className="checkout-container">
        <CartPage /> 
      </div>
    </div>
  );
}

export default ProductDetailPage;