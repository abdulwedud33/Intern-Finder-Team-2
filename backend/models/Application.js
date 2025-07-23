const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
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
    coverLetter: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['free', 'paid'],
        required: true,
    },
},{
    timestamps: true,
});

const ApplicationModel = mongoose.model('Application', ApplicationSchema);
module.exports = ApplicationModel;