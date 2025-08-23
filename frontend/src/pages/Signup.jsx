import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../pages/home.css'; // adjust if needed
import Logo from '../components/Logo';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        navigate('/login');
      } else {
        alert(data.message || "Signup failed");
      }

    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <Logo />
      <div className="container mt-5 text-center">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} className="d-flex flex-column align-items-center gap-3 mt-3">
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
          <button type="submit" className="btn btn-success w-25">Sign Up</button>
        </form>
        <p className="mt-3">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
