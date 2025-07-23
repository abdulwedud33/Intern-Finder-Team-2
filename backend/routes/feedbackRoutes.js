const express = require('express');
const FeedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// submit feedback
router.post('/submit', authMiddleware, FeedbackController.submitFeedback);

module.exports = router;