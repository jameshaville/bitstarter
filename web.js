fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var file = fs.readFile('index.html');

app.get('/', function(request, response) {
  response.send(file.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
