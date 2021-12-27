const express = require('express');
const router = express.Router({ mergeParams: true });
const Question = require('../models/question');
const { getPosts, createPost, deletePost, updatePost } = require('../controllers/questions');



router
  .route('/')
  .get(getPosts);


router
  .route('/add_question')
  .post(createPost);


router
  .route('/delete_question/:id')
  .delete(deletePost);

router
  .route('/update_question/:id')
  .put(updatePost)

module.exports = router;