const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quoteText: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: false
    }
});

module.exports = mongoose.model('Quote', QuoteSchema);