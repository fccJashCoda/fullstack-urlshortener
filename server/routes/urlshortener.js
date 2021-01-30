const express = require('express');
const router = express.Router();
const Keygen = require('../utils/keygen');
const ShortUrl = require('../models/shorturl');
const regex = require('../utils/regex');

const keygen = new Keygen();
const duplicates = [];

// @ route GET short/hello
// @ desc Ping the api
// @ access Public
router.get('/hello', (req, res) => {
  res.json({ message: 'hello there' });
});

// @ route POST short/new
// @ desc Create a new short url
// @ access Public
router.post('/new', async (req, res) => {
  const original = req.body.url;

  if (!original || !regex.urlValidation(original)) {
    return res.json({ error: 'invalid url' });
  }

  let key;
  let cycle = 0;

  while (true) {
    cycle++;
    key = keygen.generateId();
    const keyExists = await ShortUrl.findOne({ shortUrl: key });

    if (cycle > 1) {
      duplicates.push({ key, cycle });
    }
    if (!keyExists) {
      break;
    }
  }

  const originalMatch = await ShortUrl.findOne({ originalUrl: original });
  if (originalMatch) {
    return res.json(originalMatch);
  }

  const shorturl = new ShortUrl({
    originalUrl: original,
    shortUrl: key,
  });

  shorturl
    .save()
    .then((short) => res.json(short))
    .catch((err) => res.json(err));
});

// @ route DELETE short/delete
// @ desc Delete a short url
// @ access Public
router.delete('/delete', (req, res) => {
  const id = req.body.id;
  if (!id) {
    return res.json({ error: 'missing data' });
  }

  ShortUrl.findOneAndDelete({ _id: id })
    .then((data) => {
      if (!data) {
        return res.json({ error: 'invalid id' });
      }
      return res.json({ message: 'Success' });
    })
    .catch((err) => res.json({ error: err }));
});

// @ route GET short/showall
// @ desc Get all short urls in database
// @ access Public
router.get('/showall', (req, res) => {
  ShortUrl.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      if (!data) {
        return res.json({ error: 'database error' });
      }
      return res.json(data);
    })
    .catch((err) => res.json({ error: err }));
});

// @ route GET short/test/log
// @ desc Check if key generation runs into duplicates
// @ access Public
router.get('/test/log', (req, res) => {
  res.json({ duplicates });
});

module.exports = router;
