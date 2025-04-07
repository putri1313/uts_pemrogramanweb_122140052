// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    const price = item.price || 0;
    return sum + price * quantity * 15000;
  }, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <p>Keranjang belanjamu kosong.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '1rem',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/80';
                  }}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                    marginRight: '1rem',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0 }}>{item.title}</h4>
                  <p style={{ margin: '0.2rem 0' }}>
                    Rp {(item.price * 15000).toLocaleString('id-ID')}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: 'crimson',
                    color: '#fff',
                    border: 'none',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: Rp {total.toLocaleString('id-ID')}</h3>

          <Link to="/checkout">
            <button
              style={{
                marginTop: '1rem',
                backgroundColor: '#4caf50',
                color: '#fff',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Checkout Sekarang
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage;
