// TUDO REFERENTE AO RETURN
// -> Retorna um valor 
// -> Termina a função

function soma(a, b) {
    return a + b; // aqui está me retornando um valor.
}
console.log(soma(5, 2));

/**********************************************/

function soma1(a, b) {
    console.log(a + b);// aqui nao está me retornando nada(apenas aparecendo o que pedi na tela)
}
soma1(5, 2);

/**********************************************/

/* function que nao me retorna nada, mas, faz algo útil.
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red'; //Mudando fundo do body pelo java(quando houver click)
});

/**********************************************/

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome };
}

const p1 = criaPessoa('Yan', 'wallas');
const p2 = {
    nome: 'Lima',
    sobrenome: 'teus'
}; // aS DUAS LINHAS SAO A MESMA COISA DE FORMA DIFERENTE.
console.log(p1);
console.log(p2);

/**********************************************/

function falaFrase(comeco)  { 
    function falaResto(resto){
        return resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo); // me returna a function [Function: falaResto]

/* OBS: nao return a function de fora, apenas a de dentro, 
entao function de fora recebe fucntion de dentro, 
e nao os valores dentro da function de dentro, 
por isso que return [Function: falaResto]. 

/**********************************************/

function falaFrase1(comeco)  { 
    function falaResto1(resto){
        return comeco + ' ' + resto; 
    }
    return falaResto1;
}

const olaMundo1 = falaFrase1('Olá');
console.log(olaMundo1('mundo!')); // puxando a variavel da fucntion de fora, acrescentando o valor na function de dentro usando ().

/**********************************************/

// IGUAL O DE CIMA, POREM DE OUTRA FORMA.
function falaFrase2(comeco)  { 
    function falaResto2(resto){
        return comeco + ' ' + resto; 
    }
    return falaResto2;
}

const fala = falaFrase2('Olá');// jogando a function dentro de fala.
const resto = fala('mundo!'); // jogando a variavel fala dentro da variavel resto(colcondo o restante da frase)
console.log(resto);// DDentro de resto estará a frase completa.

/**********************************************/

// EXEMPLO DE UM CODIGO REAL DE UMA FUNCTION DENTRO DE OUTRA.
// EXEMPLO COM CODIGO REPETIDO.(SEM ESTA DENTRO DE OUTRA)
function duplica (n) {
    return n * 2;
} 

function triplica (n) {
    return n * 3;
} 

function quadriplica (n) {
    return n * 4;
} 
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// COMO SERIA O MESMO CODIGO COM FUNCTION DENTRO DE OUTRA FUNCTION.

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) { // vai me restorna na function de fora, a function de dentro.
        return n * multiplicador; // function de dentro retorna a conta.
    }
}
const duplica1 = criaMultiplicador(2); //Definindo o miltiplicador da função de fora na variavel.
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(2));//Definindo a variavel da função de dentro 'n'.
console.log(triplica1(2));
console.log(quadriplica1(2));