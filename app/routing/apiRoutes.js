// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


 

  // API POST Requests
  
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
   
    if (tableData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }

  });

  // ---------------------------------------------------------------------------


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;

    res.json({ ok: true });
  });
};
