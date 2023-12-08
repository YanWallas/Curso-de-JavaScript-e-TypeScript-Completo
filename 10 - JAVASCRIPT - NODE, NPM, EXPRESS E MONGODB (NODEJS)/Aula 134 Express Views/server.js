const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//FUCNTION A BAIXO PARA TRATAR O BODY
app.use(express.urlencoded({ extended: true }));//function que recebe um obj extended, dentro de uma function urlencoded(), que esta dentro de uma function Use().

app.set('views', path.resolve(__dirname, 'src', 'views'));//Lincando a pasta views que esta dentro de src.
app.set('view engine', 'ejs');

app.use(routes);//Usa minhas rotas.

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 300');
});// selecionando a porta do servidor.
