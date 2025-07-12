/* GET Homepage */
const index = (req, res) => {
    res.redner('index', { title: "Travlr Getaways"});
};

module.exports = {
    index
};