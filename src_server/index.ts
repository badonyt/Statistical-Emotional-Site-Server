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
    addtocsv_js(data)
    res.send('Hello after post');
});

app.listen(3000);
console.log('Express started on port 3000');
function addtocsv_js(data: string, where: string = "0") {
    const PythonShell = require('python-shell').PythonShell;

    var options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [where, data]
    };

    PythonShell.run('./addtocsv.py', options, function (err: any, results: any) {
        if (err)
            throw err;
        // Results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
}
