const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is listening on port 3000.");
});

app.get("/", function(req, res){
    // res.send("<h1>Just a test</h1>");
    res.sendFile(__dirname + "/index.html");
});

// The req.body.num1 comes from the index.html file and needs to be converted with Number as it's outputted as a string.
app.post("/", function(req, res){

    var result = Number(req.body.num1) + Number(req.body.num2);

    res.send("The result is: " + result);
});