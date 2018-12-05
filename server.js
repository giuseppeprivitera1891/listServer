var express = require("express");
var application = express();
var bodyParser = require("body-parser");
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended: true}));

var list = require("newtodo");

application.post("/post", function (req, res){
    var name = req.body.name;
    var description = req.body.description;
    var completed = req.body.completed;
    var user = req.body.users;
    list.ins(name, description, completed, user);
    res.status(201).json(list.list);
})
application.get("/ins", function(req, res){
    res.json(list.getUser());
})
application.listen("3001");