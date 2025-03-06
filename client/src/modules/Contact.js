import React, { useState } from 'react';
import './Contact.css';  
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      try {
        const response = await axios.post('http://localhost:5001/submit', formData);
        console.log(response.data);
        setFormSubmitted(true);
        setError('');
      } catch (err) {
        console.log(err);
        setError('There was an error submitting the form. Please try again.');
      }
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>Sk Bus Services</h2>
      <h2>www.SkBusServices@gmail.com</h2>
      <h2>9639654321</h2>
      <center>
        {formSubmitted ? (
          <p className="success-message">Thank you for reaching out! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}
        <hr></hr>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home Page</Link>
      </center>
    </div>
  );
};

export default Contact;
