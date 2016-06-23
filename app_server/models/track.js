var mongoose = require('mongoose');

var artistAlbumSchema2 = new mongoose.Schema({
  name: String,
  mbid: String,
  url: String
});

var albumPositionSchema = new mongoose.Schema({
  artist: String,
  title: String,
  mbid: String,
  url: String,
  image_small: String
});

var trackSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mbid: String,
  url: String,
  duration: Number,
  users: Number,
  playcount: Number,
  artist: artistAlbumSchema2,
  albumposition: albumPositionSchema
});

mongoose.model('Tracks', trackSchema, 'tracks');
