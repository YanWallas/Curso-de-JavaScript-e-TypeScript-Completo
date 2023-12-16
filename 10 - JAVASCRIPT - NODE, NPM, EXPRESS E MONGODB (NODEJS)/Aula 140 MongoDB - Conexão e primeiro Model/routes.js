const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');//importando um controller.
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {// function middleware que passa antes da home da pagina.
    req.session = { nome: 'Luiz', sobrenome: 'Miranda' };//salvar dados de login por exemplo.
    console.log();
    console.log('Passei no seu middleware.');
    console.log();
    next();// lest para volta a funcionar outro middleware depois desse, senao, nao executa o proximo.
}

// Route -> VAI TRATAR DAS ROTAS

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`'Ultimo middleware' Olha o que tem na req.session.sobrenome: ${req.session.sobrenome}`);// function chamada no middleware, depois que respondi o cliente(manteve contato)
});
route.post('/', homeController.trataPost);

//Rotas de Contato
route.get('/contato', contatoController.paginaInicial); 


module.exports = route;