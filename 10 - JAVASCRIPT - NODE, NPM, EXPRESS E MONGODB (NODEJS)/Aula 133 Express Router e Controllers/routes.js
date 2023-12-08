const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');//importando um controller.
const contatoController = require('./controllers/contatoController');

// Route -> VAI TRATAR DAS ROTAS

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de Contato
route.get('/contato', contatoController.paginaInicial); 


module.exports = route;