import React from 'react'

function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div className="spinner" style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #ff69b4',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }} />
      <p>Loading...</p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default LoadingSpinner
