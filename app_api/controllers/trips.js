const mongoose = require('mongoose');
// Register model
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// Get -> /trips - this lists all the travel trips
// Regardless of the outcome, response must include HTML status code
// & JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        // No filter, return all records     
        .find({})
        .exec();

        // Following line helps show results of query on console/terminal
        // Uncomment to verify
        // console.log(q);

    if (!q) {
        // Database returns no data
        return res
            .status(404)
            .json(err);
    }
    else {
        // Return correct trip list
        return res
            .status(200)
            .json(q);
    }
};

// Get -> /trips/:tripCode - this selects a single trip from the database
// Regardless of the outcome, response must include HTML status code
// & JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        // Return a single record from the database     
        .find({'code' : req.params.tripCode })
        .exec();

        // Following line helps show results of query on console/terminal
        // Uncomment to verify
        // console.log(q);

    if (!q) {
        // Database returns no data
        return res
            .status(404)
            .json(err);
    }
    else {
        // Return correct trip list
        return res
            .status(200)
            .json(q);
    }
};

// POST: /trips - Adds a new Trip
// Regardless of the outcome, response must include HTML status code
// & JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip ({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    // Following line helps show results of query on console/terminal
    // Uncomment to verify
    // console.log(q);
        
    if (!q) {
        // Database returns no data
        return res
            .status(400)
            .json(err);
    }
    else {
        // Return newly added trip
        return res
            .status(201)
            .json(q);
    }
}

// PUT: /trips/:tripCode - Updates a Trip
// Regardless of the outcome, response must include HTML status code
// & JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            // Parameter to find the trip to update
            { 'code': req.params.tripCode },
            // Data that will be input to trip
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true, runValidators: true}
        )
        .exec();

    if (!q) {
        // Database returns no data
        return res
            .status(400)
            .json(err);
    }
    else {
        // Return newly added trip
        return res
            .status(201)
            .json(q);
    }

    // Uncomment the following line to show results of operation on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};