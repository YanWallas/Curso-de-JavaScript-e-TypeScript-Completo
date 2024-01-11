require('dotenv').config();//Config para linkar banco de dados(puxando do arquivo env no corpo do projeto).

const express = require('express');
const app = express();
const mongoose = require('mongoose');//puxando banco de dados

mongoose.connect(process.env.CONNECTIONSTRING) //conectando ao servidor(link do servidor no arquivo env)
  .then(() => {
    app.emit('Pronto');//Para emitir o sinal do Bando de dados conectado.
  })
  .catch(e => console.log(e));

const session = require('express-session');//identificar navegador de cliente(salva um cookie de id)
const MongoStore = require('connect-mongo');//Salva session na base de dados.
const flash = require('connect-flash');//Msg autodestrutiva(aparece apenas uma vez)

const routes = require('./routes');// Rotas da aplicação
const path = require('path');// Trabalhar com Caminhos 
const helmet = require('helmet');// Deixar aplicação mais segura.
const csrf = require('csurf');//Segurança dos formulario(todos tem um token) - falha de segurança corrigido.
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');// Function executada nas rotas.

//FUCNTION A BAIXO PARA TRATAR O BODY
app.use(helmet());
app.use(express.urlencoded({ extended: true }));//function que recebe um obj extended, dentro de uma function urlencoded(), que esta dentro de uma function Use().
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));//Arquivo static.

const sessionOptions = session({
  secret: 'Coloca qualquer coisa',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //maximo de tempo (7 dias) contando em millesegundos.
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));//Lincando a pasta views que esta dentro de src.Renderiza na tela.
app.set('view engine', 'ejs');

app.use(csrf());

//-> NOSSOS PRÓPRIOS MIDDLEWARES
app.use(middlewareGlobal);//vai passar por todos os middlewares.
app.use(checkCsrfError);//
app.use(csrfMiddleware);
app.use(routes);//Usa minhas rotas.

app.on('Pronto', () => { //So vai conectar no servidor, depois que estiver pronto. 
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');//3000 e o número da porta do servior.
    console.log('Servidor executando na porta 300');
  });// selecionando a porta do servidor.
});

