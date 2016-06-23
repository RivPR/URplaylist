var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
  name: String,
  mbid: String,
  url: String,
  image_small: String,
  image: String
});

mongoose.model('Artist', artistSchema, 'artists');
