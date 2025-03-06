// import React from 'react'
// import { Link } from 'react-router-dom'
// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <hr></hr>
//       <Link to="/">Home Page</Link>
//     </div>
//   )
// }

// export default About
// src/About.js

import React from 'react';
import './About.css';  
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="about-container">
      <h1>About Bus Ticket Reservation System</h1>
      <p>
        Welcome to the Bus Ticket Reservation System, a modern, easy-to-use platform
        designed to make booking bus tickets hassle-free. Our service offers a
        seamless and efficient way to book tickets online, ensuring that your travel
        experience is smooth and convenient.
      </p>
      <p>
        Key features include:
      </p>
      <ul>
        <li>Real-time bus schedules and availability</li>
        <li>Simple and secure online payment options</li>
        <li>Instant ticket confirmation</li>
        <li>Easy cancellation and modifications of bookings</li>
        <li>24/7 customer support</li>
      </ul>
      <p>
        We strive to provide the best service to all travelers and help you
        reach your destination with ease. If you have any questions, feel free to
        contact our support team.
      </p>
      <hr></hr>
      
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home Page</Link>
    </div>
  );
};

export default About;
