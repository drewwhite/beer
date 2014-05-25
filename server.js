(function (require, undefined){
    "use strict";

    var express = require("express");
    var app = express();

    app.use(express.static(__dirname + "/"));
    
    app.get("/beers", function (req, res) {
        res.send(beers);
    });

    app.get("/beers/:id", function (req, res) {
        res.send(beers[req.params.id]);
    });

    var server = app.listen(8080, function() {
        console.log("Listening on port %d", server.address().port);
    });

    var beers = [
        { name: "Hop Knot", brewery: "Four Peaks", style: "American-Style IPA", "alcohol-percent": 6.7, "bitterness-ibus": 47.0, image: "/content/images/hop-knot.png" },
        { name: "Sunbru", brewery: "Four Peaks", style: "Kölsch", "alcohol-percent": 5.2, "bitterness-ibus": 17.3, image: "/content/images/sunbru.png" },
        { name: "Kiltlifter", brewery: "Four Peaks", style: "Scottish-Style Ale", "alcohol-percent": 6.0, "bitterness-ibus": 21.0, image: "/content/images/kilt.png" }
    ];
})(require);
