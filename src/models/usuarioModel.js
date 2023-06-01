var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email , classe, a, b, c, d) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,classe, a, b, c, d);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO USER (nickname,email) VALUES ('${nome}', '${email}');`;
    var instrucao2 = `INSERT INTO RESULTADO (tipo,a,b,c,d,fkUSER) VALUES ('${classe}', '${a}','${b}','${c}','${d}','${email}');`;

    console.log("Executando a instrução SQL: \n" + instrucao + instrucao2);
    database.executar(instrucao);
    return database.executar(instrucao2);
}

module.exports = {
    cadastrar,
};