const express = require("express");
const router = express.Router();
const path = require("path");
const smoothRouter = require("./smooth");
const teleportRouter = require("./teleport");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/.." + "/public" + "/index.html"));
});

router.use("/smoothMode", smoothRouter);

router.use("/teleportMode", teleportRouter);

module.exports = router;