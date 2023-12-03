const destination = require('../models/destination');

exports.getDestination = async (req, res) => {
  try {
    const destination = await destination.findAll();
    res.json(destination);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.addDestination = async (req, res) => {
  const { destinationId, title, subTitle, bonus, price, image } = req.body;
  try {
    const newDestination = await destination.create({
        destinationId,
        title,
        subTitle,
        bonus,
        price,
        image,
    });
    res.json(newDestination);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
