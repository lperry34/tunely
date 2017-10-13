var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  name: String,
  artist: String,
  releaseDate: Number
});

var Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
