const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/index");

app.use(express.static(__dirname + "/public"));

app.use("/", indexRouter);

app.listen(port);