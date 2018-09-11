const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const initializeDatabases = require('./dbs')

const router = require('./router');

// creaete the express application
const app = express();

var db;
mongoose.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  
    db = database;
    console.log("Database connection ready");
  
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});
    

// routes 
router(app);

// middleware for error handling
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message});
})

// middleware for cross origin resource sharing
app.use(cors())

module.exports = app;
