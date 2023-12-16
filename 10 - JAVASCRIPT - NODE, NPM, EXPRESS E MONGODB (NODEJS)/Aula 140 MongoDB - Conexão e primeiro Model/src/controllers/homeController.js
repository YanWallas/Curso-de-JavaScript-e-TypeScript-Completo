//FUNCTION DE TRATAMENTO.

const HomeModel = require('../models/HomeModel');

//HomeModel.find() -> para ver os dados.
HomeModel.create({// -> para criar os dados.
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.error(e))

exports.paginaInicial = (req, res) => {//Caminho
    res.render('index');// vai renderizar o index dentro da pasta views.
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);// rota do views.
    return;
};