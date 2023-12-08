const router = require('express').Router();
const all = require('../controler/blog.controler')

router.get('/',all.getBlog)
router.post('/',all.createBlog)

module.exports = router;