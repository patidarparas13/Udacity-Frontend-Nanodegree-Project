var path = require('path')
const express = require('express')
const webpack = require('webpack')
const textAPI = require('aylien_textapi')
const config = require('../../webpack.dev')
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const PORT = 5000;

API_ID = "88c4a4dc"
API_KEY = "b147a4239e1b5300ce0ead5c25549fa7"

var textapi = new textAPI({
    application_id: API_ID,
    application_key: API_KEY
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));
console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});

app.post("/api", (req, res) => {

    textapi.sentiment({
            url: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function() {
    console.log(`Example app listening on port ${PORT}!`)
})