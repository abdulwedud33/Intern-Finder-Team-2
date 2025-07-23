const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },   
    skills: [
        {
        type: String,
        required: true,
        default: [],
        }
    ],
    type: {
        type: String,
        enum: ['free', 'paid'],
        required: true,
    },
}, {
    timestamps: true,
});

const ListingModel = mongoose.model('Listing', ListingSchema);
module.exports = ListingModel;