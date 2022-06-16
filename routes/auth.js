const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/signup', async (req, res, next) => {
  res.render('auth/signup');
})

router.get('/login', async (req, res, next) => {
  res.render('auth/login');
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  // Check if user introduced all values
  if (!email || !password) {
    res.render('auth/login', { error: 'All fields are mandatory. Please fill them before submitting.' })
    return;
  }
  try {
    // Check if user exists on our DB
    const user = await User.findOne({ email: email });
    // If they don't, send them error message
    if (!user) {
      res.render('auth/login', { error: 'Email is not registered. Try with another one.' })
      return;
    } else {
      // If they do, check if the password matches and then redirect OR send the error message
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
      if (passwordMatch) {
        // I store the user on the session cookie to access it from anywhere in my app
        req.session.currentUser = user;
        res.render('auth/profile', user)
      } else {
        res.render('auth/login', { error: 'Unable to authenticate user.' })
        return;
      }
    }
  } catch (error) {
    next(error);
  }
})

router.post('/signup', async (req, res, next) => {
  const { username, email, password } = req.body;
  // Check if user introduced all values
  if (!username || !email || !password) {
    res.render('auth/signup', { error: 'All fields are mandatory. Please fill them before submitting.' })
    return;
  }
  // Check is password meets requirements
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.render('auth/signup', { error: 'Password must have lowercase letters, uppercase letters and at least one number.' })
    return;
  }
  try {
    // Generate salt 
    const salt = await bcrypt.genSalt(saltRounds);
    // Use salt to hash password
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ username, email, hashedPassword });
    res.redirect('/auth/login');
  } catch (error) {
    next(error)
  }
});

router.post('/logout', (req, res, next) => {
  // This method destroys the session on the database and the cookie
  req.session.destroy((err) => {
    if (err) {
      next(err)
    } else {
      res.redirect('/auth/login');
    }
  });
})

module.exports = router;
