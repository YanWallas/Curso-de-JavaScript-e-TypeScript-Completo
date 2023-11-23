/* -> FORMA DE IMPORTA OS DADOS DE MOD1 PELO NODE.JS

const mod1 = require('./mod1');--> Importando o obj do mod1 inteiro
const falaNome = mod1.falaNome;--> Importando apenas function dentro do mod1
console.log(falaNome());
*/

//OUTRA MANEIRA DE IMPORTA SEPARADAMENTE CADA COISA.
const path = require('path');
const axios = require('axios');


const { nome, sobrenome, falaNome, Pessoa } = require('./mod1.js');
console.log(nome);
console.log(falaNome());


const p1 = new Pessoa('Wallas');
console.log(p1);

/*
axios('http://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));*/

