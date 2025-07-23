const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  if (!user || !user.id || !user.email) {
    throw new Error('User object must contain id and email properties.');
  }
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in the environment variables.');
  }
  const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {
     expiresIn: '7d',
    });
  return token;
}

module.exports = generateToken;
