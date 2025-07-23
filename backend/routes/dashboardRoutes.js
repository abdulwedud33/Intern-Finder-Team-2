const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Intern Dashboard
router.get('/intern/:id', authMiddleware, dashboardController.getInternDashboard);

//Client Dashboard
router.get('/client/:id', authMiddleware, dashboardController.getClientDashboard);


module.exports = router;