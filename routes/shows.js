const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares');
const Show = require('../models/Show');
const Review = require('../models/Review');

// @desc    Gets new show form
// @route   GET /shows/new-show
// @access  Private
router.get('/new-show', isLoggedIn, (req, res, next) => {
  res.render('index')
});

// @desc    Sends new show to DB
// @route   POST /shows/new-show
// @access  Private
router.post('/new-show', isLoggedIn, async (req, res, next) => {
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
  const user = req.session.currentUser;
  try {
    const shows = await Show.find({});
    res.render('shows', { shows, user })
  } catch (error) {
    next(error)
  }
});

router.get('/edit/:showId', isLoggedIn, async (req, res, next) => {
  const { showId } = req.params;
  try {
    const show = await Show.findById(showId);
    res.render('edit', show)
  } catch (error) {
    next(error);
  }
})

router.post('/edit/:showId', isLoggedIn, async (req, res, next) => {
  const { showId } = req.params;
  const { title, year, description, genre, image, cast, director } = req.body;
  const yearNumber = parseInt(year);
  try {
    const updatedShow = await Show.findByIdAndUpdate(showId, { title, year: yearNumber, description, genre, image, cast, director }, { new: true });
    console.log('Just updated:', updatedShow)
    res.redirect(`/shows/${showId}`)
  } catch (error) {
    next(error);
  }
})

router.post('/delete/:showId', isLoggedIn, async (req, res, next) => {
  const { showId } = req.params;
  try {
    await Show.findByIdAndDelete(showId);
    res.redirect('/shows');
  } catch (error) {
    next(error);
  }
});

router.get('/:showId', async (req, res, next) => {
  const { showId } = req.params;
  try {
    const show = await Show.findById(showId).populate('seasons');
    const reviews = await Review.find({ show: showId });
    // console.log('Show:', show);
    res.render('detail', { show, reviews });
  } catch (error) {
    next(error)
  }
});

module.exports = router;
