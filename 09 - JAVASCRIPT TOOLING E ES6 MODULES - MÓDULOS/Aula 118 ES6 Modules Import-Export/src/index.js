import { nome as nome2 } from './modulo1';/*Buscando nome do arquivo modulo1 e mudando o nome para nome2, usando 'as'.
Porque ja tem uma variavel na pagina com o nome 'nome', e varaivel nao pode ter duas iguais.*/

import { nome3, sobrenome, idade, soma } from './modulo1';

const nome = 'wallas';

console.log(nome3, sobrenome, idade);
console.log(soma(5, 3));

console.log(nome);

import { Pessoa } from './modulo1';
const p1 = new Pessoa('Yan', 'Almeida');
console.log(p1);

// PARA EXPORTA TUDO DO MODULO DE UM VEZ.

/*import * MeuModulo from './modulo';
console.log(MeuModulo);*/

// EXPORTA ALGO PADRAO(DEFAULT)
import qualquerNome from './modulo1';//Sem chaves e posso colocar qualquer nome.
console.log(qualquerNome(10,5));

// EXPORTA ALGO PADRAO(DEFAULT) sendo variavel.
//export { nome as default } -> Nao exporta direto, tem que chamar a exportação depois.