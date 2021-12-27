const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  author: { type: String, required: true },
  creation: { type: Date, default: Date.now },
  title: { type: String, required: true },
  content: { type: String, required: true }
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;