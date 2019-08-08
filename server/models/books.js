// We will need our mongoose library
const mongoose = require('mongoose');

// Our schema
const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BooksSchema);