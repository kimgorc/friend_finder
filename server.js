//Dependencies

var express = require("express");
var path = require("path");

//set up express app

var app = express();
var PORT = process.env.PORT || 3000;

//sets up express app to handle data parsing

app.use(express.urlencoded({entended:true}));
app.use(express.json());

//data


//routes

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"))
});

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.post("api/friends", function(req, res){
    var newfriend = req.body;

    newfriend.routeName= newfrined.name.replace(/\s+/g, " ").toLowerCase();
    console.log(newfriend);
    frined.push(newfriend);
    res.json(newfriend);
});

app.listen(PORT, function(){
    console.log("App listening on PORT"+ PORT)
});