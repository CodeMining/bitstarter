var express = require('express');

var app = express.createServer(express.logger());

var buffer = nwerar msg = buffer.topp.get('/', function(request, response) {
  var fs = require('fs');
  var buff2 = new Buffer();

  response.send(buff2.toString('utc-8', fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
