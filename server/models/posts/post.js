const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: String,
  publDate: Date,
  description: String,
  photoLink: String,
  tags: Array,
  likes: Array,
});

module.exports = mongoose.model('Post', PostSchema);
