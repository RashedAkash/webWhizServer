const Blog = require('../models/Blog.models');

exports.getBlog = async (req, res) => {
  try {
    const result = await Blog.find({});
    res.status(200).send({
      status: 'success',
      message: 'blog data  get',
      data:result
    })
  } catch (error) {
    res.status(500).send({
      status: 'fail',
      message: 'blog data can not get',
      error:error.message
    })
  }
}
exports.createBlog = async (req, res) => {
  try {
    const result = await Blog.create(req.body);
    res.status(200).send({
      status: 'success',
      message: 'blog data  create',
      data:result
    })
  } catch (error) {
    res.status(500).send({
      status: 'fail',
      message: 'blog data can not create',
      error:error.message
    })
  }
}

