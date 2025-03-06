import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token); 
      alert('Login successful!');
    } catch (err) {
      alert('Invalid credentials');
      console.error(err);
    }
  };

  return (
    <div className="container">
     <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit"><a href='SearchBus' style={{ color: 'White', textDecoration: 'none' }}>Login</a></button>
          </div>
          
        </form>
        <Link to="/" style={{ color: 'White', textDecoration: 'none' }}>Home Page</Link>
      </div>
     
    
  );
};

export default Login;
