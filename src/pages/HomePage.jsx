// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heading}>Temukan Produk Berkualitas & Sesuai dengan kebutuhanmu💄✨</h1>
        <p style={styles.subheading}>
          Jelajahi berbagai pilihan produk terbaik yang cocok dengan kebuthanmu.
        </p>
        <Link to="/products">
          <button style={styles.ctaButton}>Lihat Produk</button>
        </Link>
      </section>

      <section style={styles.features}>
        <div style={styles.featureBox}>
          <h3>🧴 Rekomendasi Personal</h3>
          <p>Dapatkan produk berdasarkan kebutuhanmu.</p>
        </div>
        <div style={styles.featureBox}>
          <h3>💌 Review & Testimoni</h3>
          <p>Lihat ulasan jujur dari pengguna lainnya.</p>
        </div>
        <div style={styles.featureBox}>
          <h3>🚚 Pengiriman Cepat</h3>
          <p>Proses cepat, aman, dan terpercaya.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff0f5',
    minHeight: '100vh',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#b03060',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '1.5rem',
  },
  ctaButton: {
    backgroundColor: '#ff69b4',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  featureBox: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '280px',
  },
};

export default HomePage;
