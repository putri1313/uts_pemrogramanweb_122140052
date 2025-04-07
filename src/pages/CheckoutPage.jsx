// src/pages/CheckoutPage.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    metodePembayaran: 'Transfer Bank',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const totalHarga = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.price * quantity * 15000;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !isSubmitted) {
    return <p style={{ padding: '2rem' }}>Keranjang kosong. Silakan pilih produk terlebih dahulu.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Checkout</h2>
      {isSubmitted ? (
        <p>Terima kasih! Pesanan Anda sedang diproses. Anda akan diarahkan ke halaman utama...</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nama Lengkap:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Alamat Pengiriman:</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
              rows="3"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Metode Pembayaran:</label>
            <select
              name="metodePembayaran"
              value={formData.metodePembayaran}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
            >
              <option>Transfer Bank</option>
              <option>COD</option>
              <option>E-Wallet</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Total Pembayaran: Rp {totalHarga.toLocaleString('id-ID')}</strong>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Konfirmasi Pesanan
          </button>
        </form>
      )}
    </div>
  );
}

export default CheckoutPage;
