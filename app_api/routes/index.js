// Express application
const express = require("express");
// Router logic
const router = express.Router();

// Import the controllers needed to route
const tripsController = require('../controllers/trips');

// Define methods that route for trips endpoint :
router
    .route('/trips')
    // GET method that routes the entier tripsList
    .get(tripsController.tripsList)
    // POST method that helps add a new trip to the database
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    // GET method that routes tripsFindByCode - requires parameter
    .get(tripsController.tripsFindByCode)
    // PUT method that routes tripsUpdateTrip - requires parameter
    .put(tripsController.tripsUpdateTrip);

module.exports = router;