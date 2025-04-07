// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/150';
        }}
        style={styles.image}
      />
      <h4 style={styles.title}>{product.title}</h4>
      <p style={styles.price}>Rp {(product.price * 15000).toLocaleString('id-ID')}</p>
      <div style={styles.actions}>
        <Link to={`/products/${product.id}`}>
          <button style={styles.button}>Detail</button>
        </Link>
        <button onClick={handleAddToCart} style={styles.button}>+ Cart</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '1rem',
    width: '220px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease-in-out',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    marginBottom: '0.8rem',
  },
  title: {
    fontSize: '1rem',
    marginBottom: '0.4rem',
    minHeight: '40px',
  },
  price: {
    color: '#d63384',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',
  },
  button: {
    flex: 1,
    padding: '0.5rem',
    backgroundColor: '#ff69b4',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem',
  }
};

export default ProductCard;
