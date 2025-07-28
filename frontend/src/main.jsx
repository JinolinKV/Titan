import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx'; // ✅ Import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>  
      <CartProvider>
        <BrowserRouter basename="/Titan">
          <App />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);
