const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./config/db');


const app = express();

const notesController = require('./app/routes/note_routes')



app.use(bodyParser.urlencoded({ extended: true }));
app.use('/notes', notesController);

const port = 8000;
app.listen(port, () => {
    console.log("heeeey, we are up and get'n jiggy with it  on " + port )
})