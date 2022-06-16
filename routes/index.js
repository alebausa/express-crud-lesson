const express = require('express');
const router = express.Router();
const Show = require('../models/Show');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/shows');
});

module.exports = router;
