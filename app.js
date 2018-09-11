const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const initializeDatabases = require('./dbs')

const router = require('./router');

// creaete the express application
const app = express();

// DB Connection
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/recipedb');
// mongoose.connection 
//     .once('open',() => { console.log('db open'); })
//     .on('error', () => (error) => console.warn('Warning', error))

const db = mongoose.connect('mongodb://user:Kramer22!@ds151612.mlab.com:51612/recipedb');

// routes 
router(app);

// middleware for error handling
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message});
})

// middleware for cross origin resource sharing
app.use(cors())

module.exports = app;
