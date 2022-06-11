const express = require('express');
const router = express.Router();
const Season = require('../models/Season');
const Show = require('../models/Show');

router.post('/new/:showId', async (req, res, next) => {
  const { number, numberOfEpisodes, releaseDate } = req.body;
  const { showId } = req.params;
  try {
    const newSeason = await Season.create({ number: parseInt(number), numberOfEpisodes: parseInt(numberOfEpisodes), releaseDate })
    const show = await Show.findById(showId);
    console.log('New season:', newSeason)
    show.seasons.push(newSeason._id);
    show.save();
    res.redirect(`/shows/${showId}`)
  } catch (error) {
    next(error);
  }
})

module.exports = router;