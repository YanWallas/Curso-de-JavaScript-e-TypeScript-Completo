require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');//puxando banco de dados

const connectionsString = 'mongodb+srv://yanwallas:yan0108wallas@cursojs.hmzx7zd.mongodb.net/?retryWrites=true&w=majority';

//mongoose.connect(connectionsString, { useNewUrlParser: true, useUnifiedTopology: true } -> Caso apareca mensagem no banco de dados, utilizar o que esta dentro de {}.

mongoose.connect(connectionsString) //caso de mensagem no banco de dados, coloque { useNewUrlParser: true, useUnifiedTopology: true }.
    .then(() => {
        console.log('Conectei á base de dados.');
        app.emit('Pronto');//Para emitir o sinal do Bando de dados conectado.
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

//FUCNTION A BAIXO PARA TRATAR O BODY
app.use(express.urlencoded({ extended: true }));//function que recebe um obj extended, dentro de uma function urlencoded(), que esta dentro de uma function Use().

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));//Lincando a pasta views que esta dentro de src.
app.set('view engine', 'ejs');

//-> NOSSOS PRÓPRIOS MIDDLEWARES
app.use(meuMiddleware);//vai passar por todos os middlewares.
app.use(routes);//Usa minhas rotas.

app.on('Pronto', () => { //So vai conectar no servidor, depois que estiver pronto. 
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');//3000 e o número da porta do servior.
        console.log('Servidor executando na porta 300');
    });// selecionando a porta do servidor.
});

