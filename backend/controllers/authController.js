const User = require('../models/User');
const hashPassword = require('../utils/hashPassword');
const sendResponse = require('../utils/sendResponse');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcrypt');

// Register a new intern user
exports.registerIntern = async (req, res) => {
    try {
    const { name, email, password, phone} = req.body;
    if (!name || !email || !password || !phone) {
      return sendResponse(res, 400, false, null, 'All fields are required for intern registration.');
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 409, false, null, 'Email already in use.');
    }
      
    //hash the password
      const hashedPassword = await hashPassword(password);
      
    // Create a new intern user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'intern',
      phone,
    });
    
    // Generate a token for the user
    const token = generateToken({ id: user._id, email: user.email });
    return sendResponse(res, 201, true, {
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    }, 'Intern registered successfully');
    } catch (err) {
        console.error('Error registering intern:', err);
        // For other errors, send a generic error response
        return sendResponse(res, 500, false, null, 'An error occurred while registering the intern.');
    }
};


//Register a new Client user
exports.registerClient = async (req, res) => {
    try {
        const { name, email, password, phone} = req.body;
        if (!name || !email || !password || !phone) {
            return sendResponse(res, 400, false, null, 'All fields are required for client registration.');
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return sendResponse(res, 409, false, null, 'Email already in use.');
        }
        //hash the password
        const hashedPassword = await hashPassword(password);
        // Create a new client user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: 'client',
            phone,
        });
        // Generate a token for the user
        const token = generateToken({ id: user._id , email: user.email });
        return sendResponse(res, 201, true, {
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
            },
        }, 'Client registered successfully');
    } catch (err) {
        console.error('Error registering client:', err);
        
        // For other errors, send a generic error response
        return sendResponse(res, 500, false, null, 'An error occurred while registering the client.');
    }
};

//login intern
exports.loginIntern = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return sendResponse(res, 400, false, null, 'Email and password are required for login.');
    }

    // Find intern user
    const user = await User.findOne({ email });
    if (!user || user.role !== 'intern') {
      return sendResponse(res, 404, false, null, 'Intern not found.');
    }

    // Compare password (assuming bcrypt was used to hash password)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendResponse(res, 401, false, null, 'Invalid password.');
    }

    // Generate JWT token
    const token = generateToken({ id: user._id, email: user.email });

    // Send success response
    return sendResponse(res, 200, true, {
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    }, 'Intern logged in successfully');
    
  } catch (err) {
    console.error('Error logging in intern:', err);
    return sendResponse(res, 500, false, null, 'An error occurred while logging in the intern.');
  }
};

//login client
exports.loginClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return sendResponse(res, 400, false, null, 'Email and password are required for login.');
    }

    // Find client user
    const user = await User.findOne({ email });
    if (!user || user.role !== 'client') {
      return sendResponse(res, 404, false, null, 'Client not found.');
    }

    // Password check
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendResponse(res, 401, false, null, 'Invalid password.');
    }

    // JWT generation
    const token = generateToken({ id: user._id, email: user.email });

    // Response
    return sendResponse(res, 200, true, {
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    }, 'Client logged in successfully');

  } catch (err) {
    console.error('Error logging in client:', err);
    return sendResponse(res, 500, false, null, 'An error occurred while logging in the client.');
  }
};