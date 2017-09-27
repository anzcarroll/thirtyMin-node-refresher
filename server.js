const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const notesController = require('./app/routes/note_routes')
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/notes', notesController)
// const routes = require('./routes')(app, {});
app.listen(port, () => {
    console.log("heeeey, we are up and get'n jiggy with it  on " + port )
})