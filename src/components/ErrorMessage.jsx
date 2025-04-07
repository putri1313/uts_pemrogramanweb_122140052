import React from 'react'
import PropTypes from 'prop-types'

function ErrorMessage({ message }) {
  return (
    <div style={{
      backgroundColor: '#ffe6e6',
      color: '#b30000',
      padding: '1rem',
      margin: '1rem 0',
      border: '1px solid #ff9999',
      borderRadius: '6px',
      textAlign: 'center'
    }}>
      <strong>Error:</strong> {message}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage
