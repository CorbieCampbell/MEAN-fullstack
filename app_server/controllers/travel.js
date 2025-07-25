const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: "GET",
    headers: {
        Accept: 'application/json',
    },
};

// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET Travel View */
const travel = async function (req, res, next) {
    // console.log('TRAVEL CONTROLLER BEGTIN');
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            // Error catch if API fails to catch
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            }
            // Error catch if there's no data in the database
            else {
                if (!json.length) {
                    message = "No trips exist in our database!";
                }
            }
            // console.log(json);
            res.render("travel", { title: "Travlr Getaways", trips: json, message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    travel,
};