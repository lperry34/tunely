var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely_test");

module.exports.Album = require("./album.js");
