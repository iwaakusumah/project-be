const promo = require('../models/promo');

exports.getPromo = async (req, res) => {
  try {
    const promo = await promo.findAll();
    res.json(promo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.addPromo = async (req, res) => {
  const { promoId, title, subTitle, bonus, price, image } = req.body;
  try {
    const newPromo = await booking.create({
        promoId,
        title,
        subTitle,
        bonus,
        price,
        image,
    });
    res.json(newPromo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
