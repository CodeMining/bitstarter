var express = require('express');

var app = express.createServer(express.logger());

var buff2 = new Buffer(fs.readFileSync('index.html'));
var buffer = nwerar msg = buffer.topp.get('/', function(request, response) {
  response.send(buff2.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
