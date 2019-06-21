//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body);
  var name = req.body.name;
  var place = req.body.place;
  var verb = req.body.verb;
  var num = req.body.num;
  var adj = req.body.adj;
  res.send("Watch " + adj + " " + name + " " + verb + " over " + num + " school buses today at " + place + "!");
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
