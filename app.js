const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/smoothMode", (req, res) => {
    res.sendFile(path.join(__dirname + "/public" + "/smooth.html"));
});

app.get("/teleportMode", (req, res) => {
    res.sendFile(path.join(__dirname + "/public" + "/teleport.html"));
});

app.listen(port);