const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT = process.env.port || 3000;

const booking = require('./src/routes/booking');
const destination = require('./src/routes/destination');
const promo = require('./src/routes/promo');
const database = require('./src/config/dbConfig');
const sequelize = require('./src/config/dbConfig');

app.use(express.json());
app.use(cors());

app.use('/booking', booking);
app.use('/destination', destination);
app.use('/promo', promo);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
