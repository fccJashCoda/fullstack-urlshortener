const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/short', router.urlshortener);

app.use((req, res) => {
  res.json({ error: '404' });
});

const port = process.env.PORT || 5000;

// a post
// transform user sent url to a 7 char long code
// a get
// find all short urls for a specific user

app.listen(port, () => console.log(`Server running on port ${port}`));
