const express = require('express');
const router = express.Router();
const Show = require('../models/Show');


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const shows = await Show.find({});
    res.render('shows', { shows })
  } catch (error) {
    next(error)
  }
});

module.exports = router;
