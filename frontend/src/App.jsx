import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Men from './pages/Men';
import International from './pages/International';
import Women from './pages/women';

import Cart from './pages/Cart';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import SmartWatch from './pages/SmartWatch';
import PlaceOrder from './pages/PlaceOrder';
import Premium from './pages/Premium';
import Watches from './pages/Watches';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/login" element={<Login />} />
      <Route path="/international" element={<International />} />
      <Route path="/watches" element={<Watches />} />
      <Route path="/placeorder" element={<PlaceOrder />} /> 
      <Route path="/watch_services" element={<Service />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/smartwatch" element={<SmartWatch />} />
    </Routes>
  );
}

export default App;
