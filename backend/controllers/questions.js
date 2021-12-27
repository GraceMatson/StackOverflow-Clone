const Question = require('../models/question');


exports.getPosts = async (req, res, next) => {    
    try {

        const questions = await Question.find({});
        res.status(200).json({
            success: true,
            data: questions
        });

      } catch (error) {          
        res.status(500).json({
            success: false,
            error: 'Server Error!'
        });

      }
}

exports.createPost = async (req, res, next) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json({
            success: true,
            data: question
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        });
        
    }
}


exports.deletePost = async (req, res, next) => {
    try {
        const question = await Question.findById(req.params.id);

        if (!question) {
            return res.status(404).json({
                success: false,
                error: "This question does not exist"
            });
        }
        else {
            await question.remove();
            return res.status(200).json({
                success: true,
                data: {}
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        });
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const question = await Question.findById(req.params.id);

        if (!question) {
            return res.status(404).json({
                success: false,
                error: "This question does not exist"
            });
        }
        else {
            await Question.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json({
                success: true,
                data: req.body
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        });
    }
}