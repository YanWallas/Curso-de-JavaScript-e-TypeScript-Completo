/*
Object.values
Object.entries
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

//Obejto por Copia(muda um, NÂO muda outro) Muda apenas se for o produto1(Original)
const produto1 = {nome: 'Camiseta', preco: 1.8};
const outraCoisa1 = {
    ...produto1, //Espalhando a variavel dentro da outra
    materia: 'lã' // Adicionando outro elemento.
};

outraCoisa1.nome = 'Camiseta alterada';
console.log(produto1);
console.log(outraCoisa1);