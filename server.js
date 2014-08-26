var vm = require("vm"),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var sandbox = {
    ObjectId: function (v) {
        return v
    },
    Binary: function (v) {
        return v.buffer.toString('base64');
    },
    DBRef: function (v) {
        return v.oid.toJSON();
    },
    NumberLong: function (v) {
        return v;
    },
    ISODate: function (v) {
        return v;
    }
}

function shellJsonToJson(mongoShellJson) {
    try {
        vm.runInNewContext("result = " + mongoShellJson, sandbox);
        return JSON.stringify(sandbox.result, null, 2);
    }
    catch(e) {
        return e.toString();
    }
}

var htmlPage = require("fs").readFileSync("./page.html").toString();

app.use(bodyParser.urlencoded({ extended: true }) );

app.get("/", function(req, res) {
    res.send(htmlPage.replace("{in}", "").replace("{out}", ""));
});

app.post("/", function(req, res) {
    res.send(htmlPage.replace("{out}", shellJsonToJson(req.body.inputJson)).replace("{in}", req.body.inputJson));
});

app.listen(process.env.PORT || 5000);

