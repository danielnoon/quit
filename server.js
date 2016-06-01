var express = require('express');
var app = express();

app.use(express.static('./public'));

app.all("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.all("/page/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(8080);
