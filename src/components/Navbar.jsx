// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);

  const styles = {
    navbar: {
      backgroundColor: '#ff7eb9',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
    },
    logo: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.3rem',
      textDecoration: 'none',
    },
    menu: {
      display: 'flex',
      gap: '1.2rem',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'opacity 0.2s ease-in-out',
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        ThePutriCo 💄
      </Link>
      <div style={styles.menu}>
        <Link to="/products" style={styles.link}>Produk</Link>
        <Link to="/cart" style={styles.link}>Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
