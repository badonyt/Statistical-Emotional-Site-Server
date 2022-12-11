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
    //addtocsv_js(data, "./data/Data.csv")
    res.send('Hello after post');
    if(checkDirectory('./data')){
        if(file_exist("./data/"+getdaymonthyear()+".csv") == true){
            const start = Date.now();
            addtocsv_js(data, "./data/"+getdaymonthyear()+".csv")
            const end = Date.now();
            const elapsed = end - start; 
            console.log("Took "+elapsed + " to add to csv.")
        }else{
            writecsv(getdaymonthyear())
            const start = Date.now();
            addtocsv_js(data, "./data/"+getdaymonthyear()+".csv")
            const end = Date.now();
            const elapsed = end - start; 
            console.log("Took "+elapsed + " to add to csv.")
        }
    }else{
        const fs = require('fs');
        fs.mkdir("./data", (error: any) => {
            if (error) {
                console.log(error);
            } else {
                console.log("New Directory created successfully !!");
                if(file_exist("./data/"+getdaymonthyear()+".csv") == true){
                    const start = Date.now();
                    addtocsv_js(data, "./data/"+getdaymonthyear()+".csv")
                    const end = Date.now();
                    const elapsed = end - start; 
                    console.log("Took "+elapsed + " to add to csv.")
                }else{
                    writecsv(getdaymonthyear())
                    const start = Date.now();
                    addtocsv_js(data, "./data/"+getdaymonthyear()+".csv")
                    const end = Date.now();
                    const elapsed = end - start; 
                    console.log("Took "+elapsed + " to add to csv.")
                }
            }
        });
    }
    
});

app.listen(3000);
console.log('Express started on port 3000');
function addtocsv_js(data: string, path:string, where: string = "0"):string {
    const PythonShell = require('python-shell').PythonShell;

    var options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [where, data, path]
    };

    PythonShell.run('./addtocsv.py', options, function (err: any, results: any) {
        if (err)
            throw err;
        // Results is an array consisting of messages collected during execution
        console.log('results: %j', results);
        return("Data has been put on csv")
    });
    return("error has occured. I dont what this error might signify")
}

function getdaymonthyear():string{
    const date = new Date();
    const newtext = date.toLocaleDateString().replace('/', '.').replace('/', ".")
    return newtext
}

function file_exist(path: string): boolean{
    const fs = require('fs');
    if (fs.existsSync(path)) {
        return true
    } else {
        return false
    }
}


function writecsv(name:string){
    // (A) DATA ARRAY
    var data = [
        ["Super_Happy","Happy","Face","Sad","Super_Sad"],
        ["0","0","0","0","0"]
    ];
  
  // (B) TO CSV STRING
  var csv = "";
  for (let i of data) {
    csv += i.join(",") + "\r\n";
  }
  
  // (C) WRITE TO FILE
  const fs = require("fs");
  fs.writeFileSync("./data/"+name+".csv", csv);
  console.log("Done!");
}


function checkDirectory(path:string):boolean{
    const fs = require('fs');
    if (fs.existsSync(path)) {
        return true
    } else {
        return false
    }
}