const Listing = require('../models/Listing');
const sendResponse = require('../utils/sendResponse');

// Create a new listing
exports.createListing = async (req, res) => {  
  try {
    const { title, description, skills, location, type } = req.body;
    if (!title || !description || !skills || !location || !type) {
      return sendResponse(res, 400, false, null, 'All fields are required.');
    }
    if (!['free', 'paid'].includes(type)) {
      return sendResponse(res, 400, false, null, 'Type must be either "free" or "paid".');
    }
    const listing = await Listing.create({
      clientId: req.user.id,
      title,
      description,
      skills,
      location,
      type,
    });
    return sendResponse(res, 201, true, listing, 'Listing created successfully.');
  } catch (err) {
        console.error('Error creating listing:', err);
        return sendResponse(res, 500, false, null, 'An error occurred while creating the listing.');
    }
};

//edit a listing
exports.editListing = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, type, skills, location } = req.body;
        const updateData = { title, description, type, skills, location };
        // Remove undefined fields
        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);
        //check if the listing exists and belongs to the client
        const listing = await Listing.findOne({ _id: id, clientId: req.user.id });
        if (!listing) {
            return sendResponse(res, 404, false, null, 'Listing not found or unauthorized.');
        }
        // find the listing by ID and update it
        const updatedListing = await Listing.findByIdAndUpdate(id, updateData, { new: true });
        // If the listing was not found or the user is not authorized, return an error      
    if (!updatedListing) {
      return sendResponse(res, 404, false, null, 'Listing not found or unauthorized.');
    }
    return sendResponse(res, 200, true, listing, 'Listing updated successfully.');
    } catch (err) {
        console.error('Error editing listing:', err);
        return sendResponse(res, 500, false, null, 'An error occurred while editing the listing.');
    }
}
// Delete a listing
exports.deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    // Check if the listing exists and belongs to the client
      const listing = await Listing.findOne({ _id: id, clientId: req.user.id });
      if (!listing) {
        return sendResponse(res, 404, false, null, 'Listing not found or unauthorized.');
      }
    // Delete the listing
         const deletedListing = await Listing.findByIdAndDelete(id);
          if (!deletedListing) {
      return sendResponse(res, 404, false, null, 'Listing not found or unauthorized.');
    }
    return sendResponse(res, 200, true, null, 'Listing deleted successfully.');
  } catch (err) {
        console.error('Error deleting listing:', err);
        return sendResponse(res, 500, false, null, 'An error occurred while deleting the listing.');
    }
}


// Search listings by type, location, and skills
exports.searchListings = async (req, res) => {
    try {
        const { type, location, skills } = req.query;
        const filter = {};
    
        // Filter by type (exact match)
        if (type && ['free', 'paid'].includes(type)) {
        filter.type = type;
        }
    
        // Filter by location (case-insensitive partial match)
        if (location) {
        filter.location = { $regex: location, $options: 'i' };
        }
    
        // Filter by skills (match listings that include any skill in the array)
        if (skills) {
        const skillsArray = Array.isArray(skills) ? skills : [skills];
        filter.skills = { $in: skillsArray };
        }
    
        const results = await Listing.find(filter)
        .populate('clientId', 'name email')
        .sort({ createdAt: -1 });
    
        return sendResponse(res, 200, true, results, 'Search results');
    } catch (err) {
        console.error('Error searching listings:', err);
        // Handle specific error cases
        if (err.name === 'CastError') {
            return sendResponse(res, 400, false, null, 'Invalid search parameters.');
        }
        // For other errors, send a generic error response
        return sendResponse(res, 500, false, null, err.message);
    }
}







