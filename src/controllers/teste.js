var express = require("express");
var router = express.Router();

var testeController = require("../controllers/testeController");

router.post("/", function (req, res) {
    testeController.cadastrar(req, res);
});

module.exports = router;