//REDUCE - > Executa uma função redutor (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

//Some todos os números.(Reduce)
//Retorne um array com os pares (Filter).
//Retorne um array com o dobro dos valores (Map)
//             0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
},0); // jogando acumulador = 0;
console.log(total);

/*********************************************************************/
//Some todos os números pares.(Reduce)
const totalPar = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador += valor; //somando apenas num par.
    return acumulador;
},0); // jogando acumulador = 0;
console.log(totalPar);

/*OBS: PARA BAIXO CODIGO QUE DA PRA FAZER COM REDUCE, 
MAIS NAO E INDICADO, FAZER COM O METODO ADEQUADO SEMPRE*/

/*********************************************************************/

//Retorne um array com os pares (Filter). - Não fazer com reduce, fazer com filter
const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);// jogando uma array vazia dentro de acumulador
console.log(pares);

/*********************************************************************/

//Retorne um array com o dobro dos valores (Map) - Não fazer com reduce, fazer com map
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
},[]);// jogando uma array vazia dentro de acumuladoe
console.log(dobro);

/*********************************************************************/
/*------------------------------------------------------------------*/

//Retorne a pessoa mais velha.

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallas', idade: 47},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

