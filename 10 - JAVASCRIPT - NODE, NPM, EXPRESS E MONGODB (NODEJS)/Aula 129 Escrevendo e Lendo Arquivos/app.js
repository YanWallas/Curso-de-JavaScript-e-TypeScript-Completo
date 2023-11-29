const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

/*
const pessoas = [
    { nome: 'joão' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiz' },
];
const json = JSON.stringify(pessoas, '', 2);// Criando um json com a const pessoas.
escreve(caminhoArquivo, json);
*/

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);//voltando ser array
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);