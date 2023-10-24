/*
Object.values -> Retorna valores 
Object.entries -> Retorna valores e chaves
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos 
Object.keys (retirna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//Obejto por referencia(muda um, muda outro)
const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

outraCoisa.nome = 'Caneca alterada';
console.log(produto);
console.log(outraCoisa);

/*********************************************************************/

//Obejto por Copia(muda um, NÂO muda outro) Muda apenas se for o produto1(Original)
const produto1 = {nome: 'Camiseta', preco: 1.8};
const outraCoisa1 = {
    ...produto1, //Espalhando a variavel dentro da outra
    materia: 'lã' // Adicionando outro elemento.
};

outraCoisa1.nome = 'Camiseta alterada';
outraCoisa.preco = 2.5;
console.log(produto1);
console.log(outraCoisa1);

/*********************************************************************/

//Objecto por Copia tambem.
const produto2 = {nome: 'Produto', preco: 2.8};
const caneca = Object.assign({}, produto2, {material: 'porcelana'});

console.log(caneca);

/*********************************************************************/

//Objecto por Copia tambem(forma mais simples e menos usada)
const produto3 = {nome: 'Produto', preco: 3.8};
const caneca1 = {nome: produto3.nome, preco: produto3.preco}

caneca1.preco = 2.0;
caneca1.nome = 'Caneca';
console.log(caneca1);
console.log(produto3);

/*********************************************************************/
//O Object.getOwnPropertyDescriptor()método estático retorna um objeto que descreve a configuração de uma propriedade específica em um determinado objeto (ou seja, uma propriedade diretamente presente em um objeto e não na cadeia de protótipos do objeto). O objeto retornado é mutável, mas sua mutação não afeta a configuração da propriedade original.

const produt = {nome: 'Produto', preco: 2.0};
Object.defineProperty(produt, 'nome', {// alterando as definições da propriedade.
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produt, 'nome'));// Mostrando as definições das propriedades.
produt.nome = 'Outra coisa';// nao consigo alterar o nome por conta do defineProperty
delete produt.nome; // nao consigo deletar por conta do defineProperty
console.log(produt);

/*********************************************************************/

const produt1 = {nome: 'Caneca', preco: 2.0, material: 'Porcelana'};

//Object.values -> Retorna valores 
console.log(Object.values(produt1));

//Object.entries -> Retorna valores e chaves
console.log(Object.entries(produt1));

for (let entry of Object.entries(produt1)) {// posso utilizar um for.
    console.log(entry);//cada interação me return um array com chave e valor.
}

/*********************************************************************/

for (let [chave, valor] of Object.entries(produt1)) {// Permite fazer um Destructuring.
    console.log(chave, valor);
}
//Destructuring assignmen -> A sintaxe de atribuição de desestruturação é uma expressão JavaScript que permite descompactar valores de arrays, ou propriedades de objetos, em variáveis ​​distintas.

/*********************************************************************/

for (let valor of Object.entries(produt1)) {// Mesma coisa de cima, puxa pelo indice.
    console.log(valor[0], valor[1]);// Indice 0 nome /  indice 1 o que esta dentro de nome.
}