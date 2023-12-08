
const express = require('express')
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const mongoose = require('mongoose')
const blogRouter = require('./router/blog.router')
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); 
app.use('/api/v1/blogs',blogRouter)



mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('mongoose connect'))
  .catch(err => {
  console.log(err);
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})