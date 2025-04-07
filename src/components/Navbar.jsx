// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './navbar.css';

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        ThePutriCo 💄
      </Link>
      <div className="navbar__menu">
        <Link to="/products" className="navbar__link">Produk</Link>
        <Link to="/cart" className="navbar__link">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
