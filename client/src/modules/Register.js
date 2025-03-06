import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5001/api/register', {
        username,
        email,
        password,
      });
      alert('User registered successfully!');
    } catch (err) {
      alert('Error registering user');
      console.error(err);
    }
  };

  return (
    <div className="container">
   <h1>Registration Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            <button type="submit">Register</button>
          </div>
          
        </form>
        <Link to="/" style={{ color: 'White', textDecoration: 'none' }}>Home Page</Link>
      </div>
    
  );
};

export default Register;
