const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Blog = mongoose.model('Blog', blogsSchema);
module.exports = Blog;