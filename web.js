var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buff2 = new Buffer();

  response.send(buff2.toString('utc-8', fs.readFileSync("index.html")));
//  response.send("Hello World from index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
