const express = require('express');
const listingController = require('../controllers/listingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//apply auth middleware to all routes in this router
router.use(authMiddleware);

//create a new listing
router.post('/create', listingController.createListing);

//edit a listing
router.put('/edit/:id', listingController.editListing);

//delete a listing
router.delete('/delete/:id', listingController.deleteListing);

//search listings
router.get('/search', listingController.searchListings);

module.exports = router;