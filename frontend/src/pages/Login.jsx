import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/home.css';
import Logo from '../components/Logo';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    alert('Login successful!');
    navigate('/home');
  };

  return (
    <div>
      <Logo />
      
      <div className="container mt-5 text-center">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3 mt-3">
          <input
            type="email"
            className="form-control w-50"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control w-50"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={'/Home'}type="submit" className="btn btn-primary w-25">
            Log In
          </button>
        </form>
        <p className="mt-3">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
