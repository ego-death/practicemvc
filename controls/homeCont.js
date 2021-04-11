const mongoose = require('mongoose');

module.exports = {
    getHomePage: async (req, res) => {
        console.log(req.body);
        res.render('index.ejs', {message: 'Nothing as of yet'});
    }
}