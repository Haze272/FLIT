const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const mysql = require('mysql2');

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function(req, res){
    res.render("home.hbs");
});

app.get("/create", function(req, res){
    res.render("create.hbs");
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
