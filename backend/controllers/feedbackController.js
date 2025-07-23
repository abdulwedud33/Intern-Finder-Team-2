const Feedback = require('../models/Feedback');
const Application = require('../models/Application');
const sendResponse = require('../utils/sendResponse');

// Submit feedback (client only, once per listing-intern pair, only for 'free' internships)
exports.submitFeedback = async (req, res) => {
    try {
    const clientId = req.user.id;
    const { applicationId, message, rating, feedbackType } = req.body;
     
         // Only clients can submit feedback
    if (req.user.role !== 'client') {
      return sendResponse(res, 403, false, null, 'Only clients can submit feedback.');
    }
    // Validate input
    if (!applicationId || !message || !rating || !feedbackType) {
      return sendResponse(res, 400, 'Application ID and rating are required');
    }
    
    // Check if the application exists and belongs to the user
    const application = await Application.findOne({ _id: applicationId, user: clientId });
    if (!application) {
      return sendResponse(res, 404, 'Application not found or does not belong to you');
    }
    
      // Extract necessary fields from application
      const { internId, listingId, type } = application;
      
        // Check if feedback already exists for this application
    const existingFeedback = await Feedback.findOne({ clientId, internId, listingId, applicationId });
    if (existingFeedback) {
      return sendResponse(res, 409, false, null, 'Feedback already submitted for this intern and listing.');
    }   

        // Validation based on application type
    if (application.type === 'free') {
      // For free internships, feedback is mandatory
      if (!message || typeof rating === 'undefined' || rating === null) {
        return sendResponse(res, 400, false, null, 'Feedback (message and rating) is required for free internships.');
      }
    } else if (application.type === 'paid') {
      // For paid internships, feedback is optional
      if (!message && (typeof rating === 'undefined' || rating === null)) {
        // No feedback provided, return success (no feedback created)
        return sendResponse(res, 200, true, null, 'Feedback is optional for paid internships and was not submitted.');
      }
      // If either message or rating is provided, require both for consistency
      if ((message && (typeof rating === 'undefined' || rating === null)) || (!message && (typeof rating !== 'undefined' && rating !== null))) {
        return sendResponse(res, 400, false, null, 'Both message and rating must be provided together if submitting feedback for paid internships.');
      }
    }

    // Save feedback if required fields are present
    if (message && (typeof rating !== 'undefined' && rating !== null)) {
      const feedback = await Feedback.create({
        clientId,
        internId,
        listingId,
        message,
        rating,
        feedbackType,
        applicationId: application._id
      });
      return sendResponse(res, 201, true, feedback, 'Feedback submitted successfully.');
    }
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return sendResponse(res, 500, 'Internal server error');
  }
}



  

   

    

   

    
  
