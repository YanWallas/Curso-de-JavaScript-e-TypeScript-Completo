/* 
********************** OPERADORES LÓGICOS ***************************
&& -> Em inglês 'AND' -> Portugues 'E' -> todas as condições precisam ser verdadeiras para retorna true.
|| -> Em inglês 'OR' -> Portugues 'ou' 
! -> Em inglês 'NOT' -> Portugues 'NÃO' 
***************************************************************************
*/

console.log(true && true); //Ex: tenho dinheiro 'E' nao esta chovendo (as duas condições tem que ser true para eu sair de casa.), se apenas 1 for false, vai retorna false.

console.log(true || true);//Ex: tenho dinheiro 'OU' nao esta chovendo (Se as 2 ou apenas 1 for verdadeira, vai restorna true. todas for nao for verdadeira, ai retorna false.

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

console.log(!false);// Estou negando o valor dele, que passa a ser true.