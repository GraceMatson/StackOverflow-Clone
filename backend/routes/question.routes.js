const express = require('express');
const router = express.Router({ mergeParams: true });
const Question = require('../models/question');

router.get("/", async (request, response) => {
    const questions = await Question.find({});
  
    try {
      response.send(questions);
    } catch (error) {
      response.status(500).send(error);
    }
  });

router.post("/add_question", async (request, response) => {
    const question = new Question(request.body);
  
    try {
      await question.save();
      response.send(question);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = router;