const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');//importando um controller.
const loginController = require('./src/controllers/loginController');


// Route -> VAI TRATAR DAS ROTAS

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);


module.exports = route;
