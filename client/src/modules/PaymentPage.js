// // PaymentPage.js
// import React, { useState } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';

// const PaymentPage = () => {
//   const location = useLocation();
//   const history = useHistory();

//   // Get the bus details passed from the previous page
//   const { busName, from, to, date, availableSeats } = location.state || {};

//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [error, setError] = useState('');

//   // Handle the payment process
//   const handlePayment = () => {
//     // Example payment processing logic
//     // In a real-world app, you would integrate a payment gateway here
//     if (availableSeats > 0) {
//       setPaymentSuccess(true);
//       setError('');
//     } else {
//       setError('Payment failed. Not enough available seats.');
//     }
//   };

//   return (
//     <div className="payment-page-container">
//       <h1>Payment Page</h1>
      
//       {error && <p className="error-message">{error}</p>}

//       <div className="bus-details">
//         <h2>{busName}</h2>
//         <p>From: {from}</p>
//         <p>To: {to}</p>
//         <p>Date: {date}</p>
//         <p>Available Seats: {availableSeats}</p>
//       </div>

//       <div className="payment-form">
//         <h3>Enter Payment Details</h3>
//         {/* Payment form inputs */}
//         <input type="text" placeholder="Card Number" required />
//         <input type="text" placeholder="Expiration Date" required />
//         <input type="text" placeholder="CVV" required />

//         <button onClick={handlePayment} className="payment-btn">Pay Now</button>
//       </div>

//       {paymentSuccess && <p className="success-message">Payment Successful! Your booking is confirmed.</p>}

//       <button onClick={() => history.push('/')} className="home-btn">Go Back to Home</button>
//     </div>
//   );
// };

// export default PaymentPage;
