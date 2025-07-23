const Application = require('../models/Application');
const Listing = require('../models/Listing');
const Feedback = require('../models/Feedback');
const sendResponse = require('../utils/sendResponse');

// Intern Dashboard: fetch applications and feedback for the logged-in intern
exports.getInternDashboard = async (req, res) => {
  try {
    const internId = req.params.id || req.user._id; // Use logged-in intern ID or provided ID
    
    // Fetch applications submitted by the intern
    const applications = await Application.find({ intern: internId })
      .populate('listing', 'title company')
      .populate('intern', 'name email');

    // Fetch feedback received by the intern
    const feedback = await Feedback.find({ intern: internId })
      .populate('application', 'listing')
      .populate('intern', 'name email');

    // Send response with applications and feedback
    return sendResponse(res, 200, true, { applications, feedback }, 'Intern dashboard fetched successfully');
  } catch (error) {
    console.error('Error fetching intern dashboard:', error);
    // Send error response
    if (error.name === 'CastError') {
      return sendResponse(res, 400, false, null, 'Invalid intern ID');
    }
    return sendResponse(res, 500, false, null, 'Error fetching intern dashboard');
  }
}

// Client Dashboard: fetch posted listings and received applications for the client
exports.getClientDashboard = async (req, res) => {
    try {
      const clientId = req.params.id || req.user._id;
  
    // Fetch listings posted by the client
    const listings = await Listing.find({ client: clientId })
      .populate('client', 'name email');
     
        // Fetch applications for listings posted by this client, populate intern and listing details
    const applications = await Application.find({ listingId: { $in: listings.map(l => l._id) } })
      .populate('internId', 'name email')
      .populate('listingId', 'title');

    return sendResponse(res, 200, true, { listings, applications }, 'Dashboard data fetched successfully');
    
    } catch (error) {
    console.error('Error fetching client dashboard:', error);
    return sendResponse(res, 500, false, null, 'Error fetching client dashboard');
  }
}