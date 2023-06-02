var testeModel = require("../models/testeModel");

var sessoes = [];

function cadastrarTeste(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('CHEGUEI AQUI')
    var email = req.body.emailServer;
    var classe = req.body.classeServer;
    var a = req.body.aServer;
    var b = req.body.bServer;
    var c = req.body.cServer;
    var d = req.body.dServer;


    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)

    // Faça as validações dos valores
    if (email == undefined) {
        res.status(400).send("O email está indefinido!");
    } else if (classe == undefined) {
        res.status(400).send("A classe está indefinida!");
    } else if (a === undefined) {
        res.status(400).send("A está indefinido!");
    } else if (b === undefined) {
        res.status(400).send("B está indefinido!");
    } else if (c === undefined) {
        res.status(400).send("C está indefinido!");
    } else if (d === undefined) {
        res.status(400).send("D está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo testeModel.js
        testeModel.cadastrarTeste(email, classe, a, b, c, d)
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

function cadastrarUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;

    console.log("Nome: ", nome);
    console.log("email: ", email);

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
        
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        testeModel.cadastrarUsuario(nome, email)
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


function pegarClasse(req, res){
    var classe = req.params.classe

    console.log(`Recu as classes`)

    testeModel.acessarResultados(classe).then(function (resultado){
        if (resultado.length > 0){
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    cadastrarTeste,
    cadastrarUsuario,
    pegarClasse
}