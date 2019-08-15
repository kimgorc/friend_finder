// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var express = require("express");
var router = express.Router();
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

module.exports = router;