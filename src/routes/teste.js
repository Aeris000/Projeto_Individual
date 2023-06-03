var express = require("express");
var router = express.Router();

var testeController = require("../controllers/testeController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    testeController.cadastrarTeste(req, res);
})

router.post("/usuario", function (req, res) {
    testeController.cadastrarUsuario(req, res);
})

router.get("/pegarclasse/", function (req, res){
    testeController.pegarClasse(req, res);
}) 

router.get("/pegaratt/", function (req, res){
    testeController.pegarClasseAtt(req, res);
}) 

module.exports = router;