const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const mysql = require('mysql2');

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("home.hbs");
});

app.get("/create", (req, res) => {
    res.render("create.hbs");
});

app.listen(3000, () => {
    console.log("Сервер ожидает подключения...");
});
