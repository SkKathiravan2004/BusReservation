const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: 'Sk@24',       
  database: 'bus',   
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});


app.use(cors());
app.use(bodyParser.json());


app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error registering user');
    }
    res.status(200).send('User registered successfully');
  });
});


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) return res.status(400).send('User not found');

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});



app.post('/api/booking', (req, res) => {
  const { busName, passengerName, contactNumber, numberOfSeats } = req.body;

  if (!busName || !passengerName || !contactNumber || !numberOfSeats) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }


  const query = `INSERT INTO bookings ( passenger_name, contact_number, number_of_seats) VALUES (?, ?, ?)`;
  db.query(query, [ passengerName, contactNumber, numberOfSeats], (err, results) => {
    if (err) {
      console.error('Error inserting booking:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.status(201).json({ message: 'Booking confirmed', bookingId: results.insertId });
  });
});

app.post('/submit', (req, res) => {
  const { name, email, subject, message } = req.body;


  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }


  const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, subject, message], (err, results) => {
    if (err) {
      console.error('Error inserting into database:', err);
      return res.status(500).json({ error: 'Server error. Please try again later.' });
    }

   
    res.status(200).json({ message: 'Form submitted successfully.' });
  });
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
