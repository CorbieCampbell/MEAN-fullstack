// Express application
const express = require("express");
// Router logic
const router = express.Router();

// Import the controllers needed to route
const tripsController = require('../controllers/trips');

// Define methods that route for trips endpoint :
// GET method that routes the entier tripsList
router
    .route('/trips')
    .get(tripsController.tripsList);
// GET method that routes the tripsFindByCode - requires search parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;