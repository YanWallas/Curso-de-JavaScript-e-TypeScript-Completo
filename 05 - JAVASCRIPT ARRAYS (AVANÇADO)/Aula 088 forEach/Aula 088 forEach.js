// forEach -> so esta disponivel dentro do array

const a1 = [10, 20, 33, 44, 50, 60, 77, 88, 990];

// FORMA NORMAL DE FAZER.
for(let valor of a1) {
    console.log(valor);
};

/*********************************************************************/

// FAZENDO COM forEach
a1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

/*********************************************************************/

// Fazendo forEach com arrow function
a1.forEach(valor => console.log(valor));

/*********************************************************************/

//Simulando Reduce com forEach somando valores dentro do array
let total = 0;
a1.forEach(valor => total += valor);
console.log(total);