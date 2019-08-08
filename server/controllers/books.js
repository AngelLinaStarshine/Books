const Book = require('../models/books.js');

exports.get = (req, res) => {
    Book.find({}, (error, books) => {
        if (error) {
            return res.json({ success: false, error });
        }
        
        res.json({ books });
    });
};

exports.create = (req, res) => {
    const book = new Book();

    const {
        title,
        rating,
        year,
        description,
        author
    } = req.body;

    // Data
    book.title = title;
    book.author = author;
    book.rating = rating;
    book.description = description;
    book.year = year;

    book.save(err => {
        if (err) {
            return res.json({ success: false, err });
        }

        return res.json({ success: true });
    });
};


exports.update = (req, res) => {
    Book.findOneAndUpdate({ _id: req.body.id }, req.body, err => {
        if (err) {
            return res.json({ success: false, err });
        }

        return res.json({ success: true });
    });
};


exports.delete = (req, res) => {
    const _id = req.params.id;
        
    Book.findOneAndDelete({ _id }, err => {
        if (err) {
            return res.json({ success: false, err });
        }

        return res.json({
            success: true
        });
    });
};
