//Dependencies

var express = require("express");

//set up express app

var app = express();
var PORT = process.env.PORT || 8080;

//sets up express app to handle data parsing

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//listener

app.listen(PORT, function(){
    console.log("App listening on PORT"+ PORT)
});