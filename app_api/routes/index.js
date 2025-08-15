// Express application
const express = require("express");
// Router logic
const router = express.Router();
// Pull jsonwebtoken package
const jwt = require('jsonwebtoken');

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');
    const authHeader = req.headers['authorization'];

    // console.log('Auth Header: ' + authHeader);
    if(authHeader == null)
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' +
        headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);
    if(token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }
    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err,verified) => {
        if(err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth paramto the decoded object
    });
    next(); // We need to continue or this will hang forever
}


// Import the controllers needed to route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router.route("/register").post(authController.register);
// Define route for login endpoint
router.route("/login").post(authController.login);

// Define methods that route for trips endpoint :
router
    .route('/trips')
    // GET method that routes the entier tripsList
    .get(tripsController.tripsList)
    // POST method that helps add a new trip to the database
    .post(authenticateJWT, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    // GET method that routes tripsFindByCode - requires parameter
    .get(tripsController.tripsFindByCode)
    // PUT method that routes tripsUpdateTrip - requires parameter
    .put(authenticateJWT, tripsController.tripsUpdateTrip)
    // DELETE method that routes tripsDeleteTrip - requires parameter
    .delete(authenticateJWT, tripsController.tripsDeleteTrip);

module.exports = router;