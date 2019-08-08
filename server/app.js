// Env
require('dotenv').config();

// MongoDB
const mongoose = require('mongoose');
mongoose
    .connect(process.env.DB_URI)
    .catch(err => console.error(`ERROR: ${err}`));

// Express
const express = require('express');
const app = express();

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const indexRouter = require('./routes/index');
const updateRouter = require('./routes/update');
const loginRouter = require('./routes/login');
const verifyToken = require('./middlewares/authentication');

// API
app.use('/api/books/update', verifyToken, updateRouter);
app.use('/api/books', verifyToken, indexRouter);
app.use('/api/login', loginRouter);

app.listen(process.env.PORT || 8080);
