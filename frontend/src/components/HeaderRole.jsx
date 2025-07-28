import React from 'react';
import { Link } from 'react-router-dom'; 
import '../pages/home.css';
import { useCart } from '../context/CartContext';

const HeaderRole = () => {
  const { cartItems } = useCart(); 
  const totalItems = cartItems.length; 

  return (
    <div>
      <header className="top-header">
        <div className="logo">
          <img src="./images/titan-logo.svg" alt="Titan Logo" />
        </div>

        <div className="search-bar">
          <img src="./images/search.svg" className="search-icon" alt="Search" />
          <input type="text" placeholder="Search titan edge" />
          <img src="./images/mic-icon.svg" className="mic-icon" alt="Mic" />
        </div>

        <div className="icon-group">
          
          <div className="tooltip-wrapper">
            <Link to="/Login">
              <img src="./images/headerAccount.svg" alt="Account" />
              <span>Account</span>
            </Link>
            <div className="tooltip-box">
              <p>Enjoy A Personalized Timekeeping Experience.</p>
              <Link className="btn btn-success" to="/Login" role="button">Sign Up / Login</Link>
              <div>
                <Link to="/wishlist">
                  <span>Wishlist</span>
                </Link>
                <Link to="/cart">
                  <span>Cart</span>
                </Link>
                <Link to="/track-order">
                  <span>Track Order</span>
                </Link>
              </div>
            
            </div>
            
         
          </div>

          
          <Link to="/wishlist">
            <img src="./images/headerWishlist.webp" alt="Wishlist" />
            <span>Wishlist</span>
          </Link>

          
          <Link to="/Cart" className="position-relative">
            <img src="./images/headerCart.svg" alt="Cart" />
            <span>Cart</span>
            {totalItems > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.6rem' }}
              >
                {totalItems}
              </span>
            )}
          </Link>

          
          <Link to="/track-order">
            <img src="./images/icon-track-order-desktop.svg" alt="Track Order" />
            <span>Track Order</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HeaderRole;
