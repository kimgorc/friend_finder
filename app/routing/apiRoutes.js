var express = require("express");
var router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var friends = require("../data/friends.js");

router.get("/api/friends", function(req, res) {
    res.json(friends);
});

router.post("/api/friends", function(req, res) {
    console.log(req.body);
    var newFriend = req.body;

    friends.push(newFriend);

    res.json(true);
});

module.exports = router;
