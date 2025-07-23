const express = require('express');
const appController = require('../controllers/appController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//apply to a listing
router.post('/:id/apply', authMiddleware, appController.applyToListing);

module.exports = router;
