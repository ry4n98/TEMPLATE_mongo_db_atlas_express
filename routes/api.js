const l = require("simple-logging");

const db = require("../data/access/access");

module.exports = function(app) {
    app.post("/api/path", (req, res) => {
        res.send("result");
        console.log(req.body);
    });

    app.get("/api/test", (req, res) => {
        res.send("Connected");
        console.log(req.path);
    });
};
