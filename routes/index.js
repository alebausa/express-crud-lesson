const express = require('express');
const router = express.Router();
const Show = require('../models/Show');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/shows');
});

// Esta ruta la dejo aquí para la semana que viene, de momento no hace nada

// router.get('/hbs', async (req, res, next) => {
//   try {
//     const shows = await Show.find({});
//     const show = await Show.findById(shows[0]._id);
//     res.render('object', { shows })
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router;
