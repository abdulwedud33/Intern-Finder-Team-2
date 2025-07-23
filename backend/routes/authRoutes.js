const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

//regiter interns
router.post('/register/intern', authController.registerIntern);

//register clients
router.post('/register/client', authController.registerClient);

//login interns
router.post('/login/intern', authController.loginIntern);

//login clients
router.post('/login/client', authController.loginClient);

module.exports = router;