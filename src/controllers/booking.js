const booking = require('../models/booking');

exports.getBooking = async (req, res) => {
  try {
    const booking = await booking.findAll();
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.addBooking = async (req, res) => {
  const { bookingId, name, email, telepon, dateAt, totalPrice } = req.body;
  try {
    const newBooking = await booking.create({
        bookingId,
        name,
        email,
        telepon,
        dateAt,
        totalPrice
    });
    res.json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
