fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFile('index.html', 'utf8');
  var buffer = new Buffer();
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
