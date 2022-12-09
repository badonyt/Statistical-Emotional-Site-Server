'use strict'

let express = require('express');

let bodyParser = require('body-parser');

let app = express()
app.use(express.static('public'))

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/afterpost', function (req: any, res: any) {
    console.log(req.body)
    const reqbodyparsed = new URLSearchParams(req.body).toString();
    const data = String(reqbodyparsed).split('=')[0]
    console.log(data)
    res.send('Hello after post');
});

app.listen(3000);
console.log('Express started on port 3000');
