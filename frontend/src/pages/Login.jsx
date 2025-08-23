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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Store userId and optionally token
        localStorage.setItem('userId', data.user._id);
        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        alert("Login successful!");
        navigate('/');
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
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
          <button type="submit" className="btn btn-primary w-25">
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
