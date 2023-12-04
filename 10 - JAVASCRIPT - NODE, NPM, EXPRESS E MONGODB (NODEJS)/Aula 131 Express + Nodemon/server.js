const express = require('express');
const app = express();

// SIGINIFICADO :

//         CRIAR   LER   ATUALIZA  APAGAR
// CRUD -> CREATE, READ,  UPDATE,  DELETE
//          POST    GET     PUT    DELETE

// http://meusite.com/ <- GET -> Entregue a página '/'
// http://meusite.com/contato <- GET -> Entregue a página /contato


//const ler(rota do arquivo, function(requisição , resposta)
app.get('/', (req, res) => {
    res.send('Hello World!');// Enviando uma resposta, assim que acessar a pagina.
});

// Acessando outra rota
app.get('/contato', (req, res) => {
    res.send('Obrigada por entrar em contato com a gente.');
});

// Acessando outra rota
app.get('/form', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `);
});
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 300');
});// selecionando a porta do servidor.

//npm install nodemon --save-dev -> para instalar ferramenta que nao para o servidor. atualiza automatico sempre que salvar o arquivo.

//no package.json -> colocar no script a função a baixo.

//"start": "nodemon server.js" /*para iniciar com npm start.*/