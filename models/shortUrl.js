const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: [{ timestamp: { type: Number } }],

}, { timestamps: true })

module.exports = mongoose.model('ShortUrl', shortUrlSchema)