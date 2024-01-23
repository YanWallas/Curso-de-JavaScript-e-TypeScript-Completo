require('dotenv').config();//Config para linkar banco de dados(puxando do arquivo env no corpo do projeto).

const express = require('express');//importando framework para Node.js que fornece recursos mínimos para construção de servidores web.
const app = express();//Utilizar express importado com a const app.
const mongoose = require('mongoose');//Importando biblioteca de programação orientada a objetos que cria uma conexão entre o MongoDB e o ambiente de tempo de execução JavaScript Node.js.

mongoose.connect(process.env.CONNECTIONSTRING) //conectando ao servidor(link do servidor no arquivo env)
  .then(() => {
    app.emit('Pronto');//Para emitir o sinal do Bando de dados conectado.
  })
  .catch(e => console.log(e));//Se der erro mostra o erro na tela.

const session = require('express-session');//identificar navegador de cliente(salva um cookie de id)
const MongoStore = require('connect-mongo');//Salva session na base de dados.
const flash = require('connect-flash');//Msg autodestrutiva(aparece apenas uma vez)

const routes = require('./routes');//Importando qual as Rotas da aplicação
const path = require('path');//Importando maneira de trabalhar com diretórios e caminhos de arquivos.
const helmet = require('helmet');//Importando ajuda a proteger aplicativos Express definindo cabeçalhos de resposta HTTP.(Deixar aplicação mais segura.)
const csrf = require('csurf');//Segurança dos formulario(todos tem um token) - falha de segurança corrigido.
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');// Function executa promisses entre as rotas.

//FUCNTION A BAIXO PARA TRATAR O BODY
app.use(helmet());
app.use(helmet.referrerPolicy({policy: ["origin", "unsafe-url"]}));
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

