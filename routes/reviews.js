const express = require('express');
const router = express.Router();
const Review = require('../models/Review'); 

router.post('/new/:showId', async (req, res, next) => {
  const { showId } = req.params;
  const { stars, comment, username } = req.body;
  try {
    await Review.create({ stars: parseInt(stars), comment, username, show: showId });
    res.redirect(`/shows/${showId}`)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
