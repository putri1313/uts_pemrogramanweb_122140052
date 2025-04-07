import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal mengambil detail produk:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Memuat detail produk...</p>;
  }

  if (!product) {
    return <p style={{ padding: '2rem' }}>Produk tidak ditemukan</p>;
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: 'bold' }}>
          Rp {(product.price * 15000).toLocaleString('id-ID')}
        </p>
        <button
          onClick={() => addToCart(product)}
          style={{
            backgroundColor: '#ff69b4',
            color: '#fff',
            border: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Tambahkan ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
