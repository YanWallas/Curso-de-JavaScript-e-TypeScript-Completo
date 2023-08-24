//               12 34567 -> indice de cada string.
let umaString = 'Um texto'; // "Um \"texto\""; -> colocar aspas dentro de aspas.

console.log(umaString);
console.log(umaString[4]);//buscando o indice 4 da variavel, que é a letra 'e'.
console.log(umaString.charAt(6));// buscando o elemento da posição 6, que é o 't'.
console.log(umaString.concat(' em', ' um', ' lindo dia.'));//adicionando texto depois da variavel. 
console.log(umaString + ' em um lindo dia.');// simplificando a linha 7.
console.log(`${umaString} em um lindo dia.`);// outra forma de simplificacr a linha 7.

console.log(umaString.indexOf('texto'));// buscando onde começa a palavra 'texto' começa, me trazendo o indice.
console.log(umaString.indexOf('o',3));// buscando o indice da letra 'o', iniciando pelo indice 3.
console.log(umaString.lastIndexOf('o',3));// buscando o indice da letra 'o', iniciando pelo indice 3, de traz para frente, ou seja, nao encontrou a letra 'o'.

console.log(umaString.match(/[a-z]/g)); // traz as letra minusculas.
console.log(umaString.replace('Um', 'outra')); // Subistitui a palavra Um para a palavra Outra.
console.log(umaString.replace(/Um/, 'outra')); // outa forma de substituir.

let rato = "O rato roeu a roupa do rei de roma.";

console.log(rato.replace(/r/, '#')); // Subistituiu apenas a primeira letra 'r '.
console.log(rato.replace(/r/g, "#"));// Agora ele subistituiu todas as letra 'r' colocano 'g'.

console.log(rato.length); // verificar quantos indices/caracteres tem essa variavel string.

console.log(rato.slice(2, 5)); // buscar a palavra atravez do indice, indice 5 nao e colocado. tem que pegar 1 a mais.
console.log(rato.slice(-5, -1));// busca palavra do -5 para frente. em vez de colocar do 32 para frente.
console.log(rato.substring(rato.length -5, rato.length -1));// Mesmo codigo da linha de cima, mas complexo.

console.log(rato.split(' '));//Dividir indice por espaço. podendo escolher onde divide ex. split('r').
console.log(rato.split(' ', 3));//Mesma de cima, buscando apenas 3 resultado.

console.log(rato.toUpperCase());// Traz a variavel toda em Maiusculo. 
console.log(rato.toLowerCase());// Traz a variavel toda em minusculo.

console.log(rato.trim());// Remove os espaços em branco da variavel.
console.log(rato.replace(/\s/g, ''));// Remove os espaços em branco da variavel.


