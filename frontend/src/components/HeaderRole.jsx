import React from 'react';
import { Link } from 'react-router-dom'; 
import '../pages/home.css';
import Login from '../pages/Login';
import { useCart } from '../context/CartContext'; // ✅ Import here

const HeaderRole = () => {
  const { cartItems } = useCart(); // ✅ Access cart
  const totalItems = cartItems.length; // or use .reduce() if tracking quantity

  return (
    <div>
      <header className="top-header">
        <div className="logo">
          <img src='./images/titan-logo.svg' alt="Titan Logo" />
        </div>

        <div className="search-bar">
          <img src='./images/search.svg' className="search-icon" alt="search" />
          <input type="text" placeholder="Search titan edge" />
          <img src='./images/mic-icon.svg' className="mic-icon" alt="mic" />
        </div>

        <div className="icon-group">
          {/* Tooltip block skipped for clarity */}

          <Link to="/wishlist">
            <img src='./images/headerWishlist.webp' alt="wishlist" />
            <span>Wishlist</span>
          </Link>

          <Link to="/Cart" className="position-relative">
            <img src='./images/headerCart.svg' alt="cart" />
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
            <img src='./images/icon-track-order-desktop.svg' alt="track order" />
            <span>Track Order</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HeaderRole;
