fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html');
  var buffer = file;
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
