const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/anime', async (req, res) => {
    res.render('indvidualAnime');
});

router.get('/profile', async (req, res) => {
    res.render('profile');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signin');
});

router.get('/signup', (req, res) => {
      // render the signup page when user clicks to sign up
  res.render('signup');
});

module.exports = router;
