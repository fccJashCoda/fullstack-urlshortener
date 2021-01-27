const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router');
const ShortUrl = require('./models/shorturl');
const regex = require('./utils/regex');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/short', router.urlshortener);

// @ route GET short/:shorturl
// @ desc Access a specific shorturl
// @ access Public
app.get('/:shorturl', (req, res, next) => {
  const short = req.params.shorturl;

  // redirect to 404 if key is not valid
  if (!regex.keyValidation(short)) {
    return next();
  }

  // retirects to the original url associated with the key (NOT YET IMPLEMENTED)
  ShortUrl.findOne({ shortUrl: short })
    .then((url) => {
      if (!url) {
        return res.json({ response: 'url not found' });
      }
      return res.json(url);
    })
    .catch((err) => console.log(err));
});

// 404
app.use((req, res) => {
  res.json({ error: '404' });
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((err) => console.log('Unable to connect, database unreachable'));
