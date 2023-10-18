// MAP -> invoca a função callback passada por argumento para cada elemento do Array e gera um novo Array com resultado alterado.

// Dobre os números
//             0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numDobro = numeros.map(valor => valor *2);
console.log(numDobro);

/*********************************************************************/
/*------------------------------------------------------------------*/

//PARA CADA ELEMENTO:
// Retorne apenas uma string com o nome da pessoa.
// Remova apenas a chave 'nome' do objeto.
// Adicione uma chave id em cada ojeto.

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallas', idade: 47},
];

// Retorne apenas uma string com o nome da pessoa.
const nome = pessoas.map(obj => obj.nome);
console.log(nome);

// Remova apenas a chave 'nome' do objeto.
const idade = pessoas.map(obj => ({idade: obj.idade}));//Preciso colocar '()' para proteger a função '{idade: obj.idade}' do return
console.log(idade);

// Adicione uma chave id em cada ojeto.
const adicID = pessoas.map((obj, indice) => {
    const newObj = {...obj};//criando um novo objeto para nao mexer no original.
    newObj.id = indice + 1;//adicionando o ID e colocando o numero do indice no ID.
    return newObj;
});
console.log(adicID);