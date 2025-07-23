const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const sendResponse = require('../utils/sendResponse');

const authMiddleware = async (req, res, next) => {
    try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        sendResponse(res, 401, false, null, 'Authorization header missing or invalid');
        return;
      }  
    const token = authHeader.split(' ')[1];  
      if (!token) {
    return sendResponse(res, 401, flase, null, 'No token provided');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded || !decoded.id) {
      return sendResponse(res, 401, false, null, 'Invalid token format');  
    }

    const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        return sendResponse(res, 404, false, null, 'User not found');
        }

    req.user = user;
    next();
  } catch (error) {
      console.error(error);
    sendResponse(res, 500, false , null, 'Internal server error');  
  }
}

module.exports = authMiddleware;