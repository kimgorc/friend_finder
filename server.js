//Dependencies

var express = require("express");

//set up express app

var app = express();
var PORT = process.env.PORT || 8080;

//sets up express app to handle data parsing

app.use(express.urlencoded({entended:true}));
app.use(express.json());

//express to handle data parsing

app.use(express.urlencoded({extended : trud}));
app.use(express.json());

//routes

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//listener

app.listen(PORT, function(){
    console.log("App listening on PORT"+ PORT)
});