var express = require("express");
var application = express();
var bodyParser = require("body-parser");
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended: true}));

var list = require("newtodo");

application.post("/post", function (req, res){
    list.ins(req.body);
    res.status(201).json(list.list);
})
application.get("/ins", function(req, res){
    res.json(list.getUser());
})
application.listen("3001");