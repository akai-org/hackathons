var ghpages = require("gh-pages");
var fs = require("fs");

fs.writeFile("build/CNAME", "hackathons.akai.org.pl", function(err) {});
ghpages.publish("build", function(err) {});
