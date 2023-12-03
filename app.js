// app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3306;

const booking = require('./src/routes/booking');
const destination = require('./src/routes/destination');
const promo = require('./src/routes/promo');
const database = require('./src/config/dbConfig');
const sequelize = require('./src/config/dbConfig');

app.use(express.json());
app.use(cors());

// Routes
app.use('/booking', booking);
app.use('/destination', destination);
app.use('/promo', promo);

sequelize.sync({ alter: true });

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
