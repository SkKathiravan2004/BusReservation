import React, { useState } from 'react';
import './SearchBus.css';  
import { Link } from 'react-router-dom';

const SearchBus = () => {
  
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [availableBuses, setAvailableBuses] = useState([]);
  const [error, setError] = useState('');

 
  const busesData = [
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-01', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-02', availableSeats: 30 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-03', availableSeats: 25 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-04', availableSeats: 50 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-05', availableSeats: 12 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-06', availableSeats: 23 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-07', availableSeats: 34 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-08', availableSeats: 9 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-09', availableSeats: 27 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-10', availableSeats: 28 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-11', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-12', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-13', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-14', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-15', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-16', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-17', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-18', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-19', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-20', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-21', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-22', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-23', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-24', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-25', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-26', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-27', availableSeats: 20 },
    { busName: 'Luxury Express', from: 'Chennai', to: 'Madurai', date: '2025-02-28', availableSeats: 20 },

    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-01', availableSeats: 20 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-02', availableSeats: 30 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-03', availableSeats: 25 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-04', availableSeats: 50 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-05', availableSeats: 12 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-06', availableSeats: 23 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-07', availableSeats: 34 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-08', availableSeats: 9 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-09', availableSeats: 27 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-10', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-11', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-12', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-13', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-14', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-15', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-16', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-17', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-18', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-19', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-20', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-21', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-22', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-23', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-24', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-25', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-26', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-27', availableSeats: 28 },
    { busName: 'PVR Express', from: 'Chennai', to: 'Trichy', date: '2025-02-28', availableSeats: 28 },

    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-02', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-03', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-04', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-05', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-06', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-07', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-08', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-09', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-10', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-11', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-12', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-13', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-14', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-15', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-16', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-17', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-18', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-19', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-20', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-21', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-22', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-24', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-23', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-26', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-25', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-27', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-26', availableSeats: 15 },
    { busName: 'Fast Track', from: 'Chennai', to: 'Bangalore', date: '2025-02-28', availableSeats: 15 },

    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-01', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-02', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-03', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-04', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-05', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-06', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-07', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-08', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-09', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-10', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-11', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-12', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-13', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-14', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-15', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-16', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-17', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-18', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-19', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-20', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-21', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-22', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-23', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-24', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-25', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-28', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-27', availableSeats: 30 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-28', availableSeats: 30 },

    { busName: 'Hilltop Bus', from: 'Madurai', to: 'Kodaikanal', date: '2025-02-03', availableSeats: 25 },
    { busName: 'Hills Express', from: 'Ooty', to: 'Coonur', date: '2025-02-02', availableSeats: 15 },
    { busName: 'Southern Travels', from: 'Coimbatore', to: 'Ooty', date: '2025-02-01', availableSeats: 30 },
    { busName: 'Hilltop Bus', from: 'Madurai', to: 'Kodaikanal', date: '2025-02-03', availableSeats: 25 },
  ];

 
  const handleSearch = (e) => {
    e.preventDefault();

    setError('');

    if (!fromLocation || !toLocation || !travelDate) {
      setError('Please fill in all fields.');
      return;
    }

  
    const result = busesData.filter(
      (bus) =>
        bus.from.toLowerCase() === fromLocation.toLowerCase() &&
        bus.to.toLowerCase() === toLocation.toLowerCase() &&
        bus.date === travelDate
    );

    if (result.length > 0) {
      setAvailableBuses(result);
    } else {
      setError('No buses found for the selected route and date.');
    }
  };

  return (
    
    <div className="search-bus-container">
      <center>
      <h1>Search Buses</h1>

      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="fromLocation">From</label>
          <input
            type="text"
            id="fromLocation"
            name="fromLocation"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Enter departure city"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="toLocation">To</label>
          <input
            type="text"
            id="toLocation"
            name="toLocation"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="Enter destination city"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelDate">Travel Date</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />
        </div>

      <center> <button type="submit" className="search-btn">Search</button></center> 
      </form>

      {error && <p className="error-message">{error}</p>}

      <div className="buses-list">
        {availableBuses.length > 0 ? (
          availableBuses.map((bus, index) => (
            <div key={index} className="bus-card">
              <h2>{bus.busName}</h2>
              <p>From: {bus.from}</p>
              <p>To: {bus.to}</p>
              <p>Date: {bus.date}</p>
              <p>Available Seats: {bus.availableSeats}</p>
              <Link to={`/book/${bus.busName}`} className="book-btn">Book Now</Link>
            </div>
          ))
        ) : (
          <p>No buses available for the selected criteria.</p>
        )}
      </div>

      <div className="home-link">
       <Link to="/" style={{ color: 'White', textDecoration: 'none' }}>Home Page</Link>
      </div>
      </center>
    </div>
  );
};

export default SearchBus;
