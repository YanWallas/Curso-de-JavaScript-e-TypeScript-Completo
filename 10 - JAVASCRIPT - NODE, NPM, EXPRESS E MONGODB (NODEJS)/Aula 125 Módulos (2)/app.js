/*
const multiplicacao = require('./mod');
console.log(multiplicacao(2, 2));*/

const Cachorro = require('./B/C/D/mod');
const cachorrinho = new Cachorro('Dog');
cachorrinho.latir();

const Cachorro2 = require('./Z/mod2');

const c1 = new Cachorro2('Dog2');
c1.latir();

// . -> significa o lugar que voce está no arquivo.

// para frente -> ./pasta/arquivo -> para voce acessar um pasta ou arquivo para frente de onde voce está.

//para trás -> ../pasta/arquivo -> voltando numa pasta para entrar em outra pasta ou arquivo.

console.log(__filename);// Nome arquivo atual
console.log(__dirname);// Nome pasta Atual

console.log('********************************************');

const path = require('path');//Metodo do node para resolver caminhos.
console.log(path.resolve(__dirname));//Vai buscar o caminho da pasta que eu me encontro.

console.log(path.resolve(__dirname,'..', '..'));// Os dois pontos diz que quero volta a uma pasta anterios, como tem duas vezes, quero voltar a duas pasta.

console.log(path.resolve(__dirname,'..', '..', 'arquivos', 'imagens'));//Depois que voltei as pasta, pedi para entrar na pasta arquivos e depois na pasta imagens.