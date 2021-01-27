const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'hello there' });
});

router.post('/new', (req, res) => {
  const payload = req.body.url;
});

module.exports = router;
