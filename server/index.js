const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

app.engine("hbs", expressHbs.engine(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/", function(_, response){

    response.render("home.hbs");
});
app.listen(3000);
