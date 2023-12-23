const express = require('express');
const cors = require('cors');
const bookingRoute = require('./src/routes/booking');
const destinationRoute = require('./src/routes/destination');
const promoRoute = require('./src/routes/promo');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', booking);
app.use('/', destination);
app.use('/', promo);

app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
