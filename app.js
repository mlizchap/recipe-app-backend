const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

// DB Connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/recipedb');
mongoose.connection 
    .once('open',() => { console.log('db open'); })
    .on('error', () => (error) => console.warn('Warning', error))

// middleware 
app.use(bodyParser.json())

// routes 
router(app);

module.exports = app;
