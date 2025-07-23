const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    internId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    listingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true,
    },
    applicationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    feedbackType: {
        type: String,
        enum: ['positive', 'negative'],
        required: true,
    },
}, {
    timestamps: true,
});

const FeedbackModel = mongoose.model('Feedback', FeedbackSchema);
module.exports = FeedbackModel;