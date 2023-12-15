import React from 'react'
import logo from '../../assets/Logo-4-e1654525062364.webp'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
          <div className="footer-content">
            <div className="footer-text">
              <p>Powered By <img src={logo} alt="logo" /></p>
            </div>
          </div>
        </div>
  )
}

export default Footer