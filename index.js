'use strict'

let express = require('express');

let bodyParser = require('body-parser');

let app = express()
app.use(express.static('public'))

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/afterpost', function (req, res) {
    console.log(req.body)
    res.send('Hello after post');
    console.log("Test")
});

app.listen(3000);
console.log('Express started on port 3000');
