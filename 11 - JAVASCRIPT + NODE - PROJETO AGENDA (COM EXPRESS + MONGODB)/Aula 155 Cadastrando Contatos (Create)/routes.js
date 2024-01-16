const express = require('express');//Importando express
const route = express.Router();//Importando route do express para const.
const homeController = require('./src/controllers/homeController');//importando um arquivo controller.
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');


// Route -> VAI TRATAR DAS ROTAS

// Rotas da home
route.get('/', homeController.index);//rota que importa o arquivo do homeController, diretamente da function index.

// Rotas de login
route.get('/login/index', loginController.index);//rota que importa o arquivo do loginController, diretamente da function index.

route.post('/login/register', loginController.register);//rota que importa o arquivo do loginController, diretamente da function register.

route.post('/login/login', loginController.login);//rota que importa o arquivo do loginController, diretamente da function login.

route.get('/login/logout', loginController.logout);//Rota para sair

// Rotas de contato
route.get('/contato/index', contatoController.index);

module.exports = route;//Exportando as informações dos modelos routes.
