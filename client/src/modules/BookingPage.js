import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { busName } = useParams();

  const [passengerName, setPassengerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!passengerName || !contactNumber || !numberOfSeats) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/booking', {
        busName,
        passengerName,
        contactNumber,
        numberOfSeats,
      });

      if (response.status === 201) {
        setBookingSuccess(true);
        setErrorMessage('');
      }
    } catch (err) {
      setErrorMessage('Error booking your ticket, please try again.');
      console.error(err);
    }
  };

  return (
    <div className="booking-page-container">
      <center>
        <h1>Booking for {busName}</h1>

        {bookingSuccess ? (
          <div className="success-message">
            <h2>Booking Confirmed!</h2>
            <p>Your booking for {numberOfSeats} seat(s) on the "{busName}" bus is successful.</p>
          </div>
        ) : (
          <>
            <p>Here, you can proceed with your booking for the {busName} bus.</p>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleBooking}>
              <div className="form-group">
                <label htmlFor="passengerName">Passenger Name</label>
                <input
                  type="text"
                  id="passengerName"
                  name="passengerName"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numberOfSeats">Number of Seats</label>
                <input
                  type="number"
                  id="numberOfSeats"
                  name="numberOfSeats"
                  value={numberOfSeats}
                  onChange={(e) => setNumberOfSeats(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <button type="submit" className="book-btn">Confirm Booking</button>
            </form>
          </>
        )}

        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home Page</Link>
      </center>
    </div>
  );
};

export default BookingPage;
