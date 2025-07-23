const Application = require('../models/Application');
const Listing = require('../models/Listing');
const sendResponse = require('../utils/sendResponse');

//Intern apply to a listing
exports.applyToListing = async (req, res) => {
  try {
      const { id } = req.params;
      const internId = req.user.id; 
      const { coverLetter } = req.body;

    // Check if the listing exists
    const listing = await Listing.findById(id);
    if (!listing) {
      return sendResponse(res, 404, false, null, 'Listing not found.');
    }

    // Check if the user has already applied for this listing
    const existingApplication = await Application.findOne({
      id,
      internId
    });
    if (existingApplication) {
      return sendResponse(res, 400, false, null, 'You have already applied for this listing.');
    }

    // Create a new application
    const application = await Application.create({
      InternId: req.user.id,
      listingId: listing.id, // Assuming the listing has an '_id' field
      coverLetter,
      type: listing.type, // Assuming the listing has a 'type' field
    });

    return sendResponse(res, 201, true, application, 'Application submitted successfully.');
  } catch (err) {
    console.error('Error applying for listing:', err);
    return sendResponse(res, 500, false, null, 'An error occurred while applying for the listing.');
  }
}