/* 
********************** OPERADORES LÓGICOS ***************************
&& -> False && true -> Se false, retornara o valor que e false (parando de checar ali mesmo) -> Se true retorna o valor da ultima checagem. 
|| -> Em inglês 'OR' -> Portugues 'ou' -> Se uma das condições for true, retorna verdadeiro. 

FALSY - VALORES AVALIADO EM FALSE
-> False
-> 0
-> '' "" `` (Espaço facil)
-> null / undefined
-> NaN
OBS:ELEMENTOS NAO TENDO ESSAS AVALIAÇÕES, SIGNIFICA QUE SAO TRUE(VERDADEIRO)

***************************************************************************
*/
function falaOi() {
    return 'Oi';
}

let vaiExecutar;
console.log(vaiExecutar && falaOi());// retorna false, não realiza a function 

vaiExecutar = 'João';
console.log(vaiExecutar && falaOi());//retorna verdadeira, então realiza a function

console.log(0 || false || null || 'Luiz Otáio' || true);//retorna o primeiro elemento que encontrar verdadeiro.

let corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);// retorna true(preto), porque o usuario ainda nao definiu uma cor.


