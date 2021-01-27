const express = require('express');
const router = express.Router();
const Keygen = require('../utils/keygen');

const key = new Keygen();

router.get('/hello', (req, res) => {
  res.json({ message: 'hello there' });
});

router.post('/new', (req, res) => {
  const payload = req.body.url;
});

router.get('/:shorturl', (req, res, next) => {
  // if shorturl doesn't pass regex, redirect to 404
});

module.exports = router;
