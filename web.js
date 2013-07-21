var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlfile = "index.html";
var htmlfilegold = "index-gold.html";

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfilegold).toString();
  response.send(html);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
