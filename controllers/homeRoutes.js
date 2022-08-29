const router = require('express').Router();
const { User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  
});

router.get('/post/:id', async (req, res) => {

});

router.get('/login', (req, res) => {

});

router.get('/signup', (req, res) => {

});

module.exports = router;
