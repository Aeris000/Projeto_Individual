var testeModel = require("../models/testeModel");

var sessoes = [];

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nome_inserido = req.body.nomeServer;
    var email_inserido = req.body.emailServer;
    var classe = req.body.classeServer;
    var a = req.body.aServer;
    var b = req.body.bServer;
    var c = req.body.cServer;
    var d = req.body.dServer;

    // Faça as validações dos valores
    if (nome_inserido == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (email_inserido == undefined) {
        res.status(400).send("O email está indefinido!");
    } else if (classe == undefined) {
        res.status(400).send("A classe está indefinida!");
    } else if (a == undefined) {
        res.status(400).send("A está indefinido!");
    } else if (b== undefined) {
        res.status(400).send("B está indefinido!");
    } else if (c == undefined) {
        res.status(400).send("C está indefinido!");
    } else if (d== undefined) {
        res.status(400).send("D está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo testeModel.js
        testeModel.cadastrar(nome, email, classe, a, b, c, d)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}