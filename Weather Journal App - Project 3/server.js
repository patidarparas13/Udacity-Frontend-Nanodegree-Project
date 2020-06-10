// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Dependencies */
const bodyParser = require('body-parser')
    /* Middleware*/
    //Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, listening => console.log(`Server is running on port ${port}`))

//Get Request Method
app.get('/addData', function(req, res) {
    res.send(projectData);
})

//Post Request Method
app.post('/addData', function(req, res) {
    projectData = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content,
    };
    res.send({
        success: true,
        message: "Data Saved",
        data: projectData
    });

    res.status(204).end();
})