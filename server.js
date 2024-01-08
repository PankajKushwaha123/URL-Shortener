const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

const MongoDB_URI = "YOUR_MongoDB_URI";

// Database Connection
mongoose.connect(MongoDB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}, () => { console.log("MongoDB Connected...")})

app.set('view engine', 'ejs')
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: false }))


// Home Page
app.get('/', async (req, res) => {
  res.render('index')
})

// List of all generated links
app.get('/links', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('links', { shortUrls: shortUrls })
})


// Statistics of a short URL
app.get('/s/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})
  if (shortUrl == null) return res.sendStatus(404)
  let timestamps = [];
  shortUrl.clicks.forEach(item => {timestamps.push(item.timestamp);})
  res.render('s', { stats: timestamps })
})


// Generating short URL
app.get('/shortURL', async (req, res) => {
  const shortURL = await ShortUrl.create({ full: req.query.longURL })
  const responseData = {
    shortURL: shortURL.short
  };
  res.json(responseData);
})


// Redirecting to Full URL
app.get('/:shortUrl', async (req, res) => {
  const entry = await ShortUrl.findOneAndUpdate(
    {
      short: req.params.shortUrl,
    },
    {
      $push: {
        clicks: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (entry == null) return res.sendStatus(404)
  res.redirect(entry.full)
})


// Starting Server
app.listen(5000, ()=>{console.log("Server started...")});