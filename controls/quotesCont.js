const mongoose = require('mongoose');
const Quotes = require('../models/Quote');

module.exports = {
    getHomePage: async (req, res) => {
        let data = await Quotes.find();
        res.render('quotes.ejs', {info: data});
    },
    postQuote: async (req, res) => {
        await Quotes.create(req.body);
        console.log('The quote has been entered into database');
        res.redirect('/' );
    }
}