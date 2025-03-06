

import React from 'react';
import './Services.css';  
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We offer a variety of services to make your travel experience comfortable and convenient.</p>

      <div className="service-card">
        <h2>Bus Ticket Booking</h2>
        <p>Book your bus tickets online with ease. Choose from a wide range of buses, schedules, and routes for a hassle-free travel experience.</p>
      </div>

      <div className="service-card">
        <h2>Real-Time Bus Schedules</h2>
        <p>Check real-time bus schedules and plan your journey. Stay updated on bus departures and arrivals at your convenience.</p>
      </div>

    
      <div className="service-card">
        <h2>Easy Cancellations & Modifications</h2>
        <p>Change your booking or cancel your ticket with just a few clicks. We offer flexible cancellation policies for your convenience.</p>
      </div>

      <div className="service-card">
        <h2>24/7 Customer Support</h2>
        <p>Our support team is available round the clock to assist you with any queries, booking issues, or travel-related concerns.</p>
      </div>
      <center>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home Page</Link></center>
    </div>
  );
};

export default Services;

