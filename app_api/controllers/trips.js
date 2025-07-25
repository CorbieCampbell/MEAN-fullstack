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

module.exports = {
    tripsList,
    tripsFindByCode
};