const express = require('express');
const app = express();

//FUCNTION A BAIXO PARA TRATAR O BODY
app.use(express.urlencoded({ extended: true }));//function que recebe um obj extended, dentro de uma function urlencoded(), que esta dentro de uma function Use().

// Acessando outra rota
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"> 
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar Formulário</button>
    </form>
    `);
});
//                   1º            2º -> parametro...   
app.get('/testes/:idUsuarios?/:paramentro?', (req, res) => {//pode ou nao receber parametros.
    console.log(req.params);//recebendo parametros -> /profiles/3
    console.log(req.query);//query string -> /profiles/?chave1=valor1
    res.send(req.params);// se quiser colocar mais, so usar '&" -> /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
});

app.post('/', (req, res) => {// trata valor como POST
    console.log(req.body);//body da requisição -> valor vem dentro do body
    res.send(`Recebi o formulário -> você me enviou: ${req.body.nome}`);//nome vem do imput la de cima.
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 300');
});// selecionando a porta do servidor.
