// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 ThePutriCo 💄. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
    backgroundColor: '#ffe4ec',
    color: '#333',
    borderTop: '1px solid #ddd',
  },
  text: {
    fontSize: '0.9rem',
    margin: 0,
  }
};

export default Footer;
