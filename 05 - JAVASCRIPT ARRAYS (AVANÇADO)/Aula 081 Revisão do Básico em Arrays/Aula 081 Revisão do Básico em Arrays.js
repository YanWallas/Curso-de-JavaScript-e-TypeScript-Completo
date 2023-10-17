//                 0         1         2
const nomes = ['Eduarda', 'Maria', 'Joana'];
nomes[2] = 'João'; // trocando o array indice 2 
delete nomes[1]; // Deletando indice 1
console.log(nomes);

/**********************************************/

//funciona para Strings, Objetos, Funções, Números
const nome = new Array('Eduardo', 'João', 'Stela');// uma forma de criar.
console.log(nome);

/**********************************************/

//VALORES POR REFERÊNCIA 
const nomes1 = ['Wallas', 'Yan', 'vai perder'];
const novo = nomes1;

novo.pop();// Tirando o ultimo indice da const novo(tamém altera nomes1).
console.log(novo);

/**********************************************/

//VALORES SENDO SALVO NA VARIAVEL 
const nomes2 = ['Teus', 'Lima', 'vai perder'];
const novo2 = [...nomes2]; // Pegando tudo que esa dentro de nomes.

novo2.pop();// Tirando o ultimo indice da const novo(nao vai alterar nomes).
console.log(nomes2);// Sem ter alteração
console.log(novo2);// com a alteração

console.log(nomes2.length); // Pegar o tamanho do array.

/**********************************************/

const nomes3 = ['Teus', 'Lima', 'vai perder'];
const removido = nomes3.shift();//Removendo o primeiro indice(jogando ele dentro da variavel).

nomes3.push('Wallas');// Adicionando dentro do array no final.
nomes3.unshift('Elaine'); // Adicionando dentro do array no inicio. 

console.log(nomes3, removido);//Mostrando variavel e o indice removido na outra variavel. 

/**********************************************/
//                 0         1        2         3          4
const nomee = ['Eduardo', 'maria', 'joana', 'Wallace', 'Rosana'];
const fatia = nomee.slice(1, 3);// começa no 1 e termina no 3.
console.log(fatia);

/**********************************************/

const noome = 'Luiz Otavio Miranda';
const noomes = noome.split(' ');//pegando a string e transformando no array separando pelo espaço.
console.log(noomes);

 const noomes1 = noomes.join(' ');// Pegando array e transformando em string.
 console.log(noomes1);
