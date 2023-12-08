const express = require('express');
const app = express();
const routes = require('./routes');

//FUCNTION A BAIXO PARA TRATAR O BODY
app.use(express.urlencoded({ extended: true }));//function que recebe um obj extended, dentro de uma function urlencoded(), que esta dentro de uma function Use().

app.use(routes);//Usa minhas rotas.

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 300');
});// selecionando a porta do servidor.
