const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public/"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render("card_select");
})



app.listen(8080, () => {
        console.log("server startend on port 8080");

    })