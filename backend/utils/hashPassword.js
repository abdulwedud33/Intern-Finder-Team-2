const bcrypt = require('bcrypt');
const sendResponse = require('./sendResponse');

const hashPassword = async (password) => {
  try {
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    sendResponse(res, 500, false, null, 'Error hashing password');
  }
}

module.exports = hashPassword;