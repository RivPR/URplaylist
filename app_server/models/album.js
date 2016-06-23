var mongoose = require('mongoose');

var artistAlbumSchema = new mongoose.Schema({
  name: String,
  mbid: String,
  url: String
});

var tracksAlbumSchema = new mongoose.Schema({
  name: String,
  duration: String,
  mbid: String,
  url: String,
  artist: artistAlbumSchema
});

var albumSchema = new mongoose.Schema({
  name: String,
  artist: String,
  id: Number,
  mbid: String,
  url: String,
  releasedate: String,
  image_small: String,
  users: Number,
  playcount: Number,
  tracks: [tracksAlbumSchema]
});

mongoose.model('Album', albumSchema, 'albums');
