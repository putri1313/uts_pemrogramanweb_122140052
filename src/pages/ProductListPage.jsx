import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductListPage() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal mengambil produk:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Memuat produk...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Semua Produk</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              width: '230px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/200';
              }}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                marginBottom: '1rem',
              }}
            />
            <h4 style={{ fontSize: '0.9rem', minHeight: '48px' }}>{product.title}</h4>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>
              Rp {(product.price * 15000).toLocaleString('id-ID')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <Link to={`/products/${product.id}`}>
                <button
                  style={{
                    backgroundColor: '#ff69b4',
                    color: '#fff',
                    border: 'none',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Detail
                </button>
              </Link>
              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: '#ff69b4',
                  color: '#fff',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                + Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
