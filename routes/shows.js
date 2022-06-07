const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

/* GET users listing. */
router.post('/new-show', async (req, res, next) => {
  const { showTitle, year, description, genre, image, cast, director } = req.body;
  const yearNumber = parseInt(year);
  // Promises with then() catch()
  // Show.create({ title, year, description, genre, image, cast, director })
  //   .then((createdShow) => {
  //     res.json(createdShow)
  //   })
  //   .catch(err => next(err));
  try {
    await Show.create({ title: showTitle, year: yearNumber, description, genre, image, cast, director });
    res.redirect('/shows');
  } catch (error) {
    next(error)
  }
});

router.get('/', async (req, res, next) => {
  try {
    const shows = await Show.find({});
    res.render('shows', { shows })
  } catch (error) {
    next(error)
  }
})

router.get('/:showId', async (req, res, next) => {
  const { showId } = req.params;
  try {
    const show = await Show.findById(showId);
    res.render('detail', show)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
