
function funcao() {
    console.log("Oie");
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // o JavaScript nao vai executar esse parametro.

// Quando se usa a palavra function, existe uma ferramenta para ser utilizada.

function funcao1() {
    console.log(arguments);// ela sustenta tudo que enviei em objeto.podendo pegar o indice com [].
}
funcao1('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'luiz'); // o JavaScript vai executar esse parametro.

/**********************************************/

// arguments que sustenta todos os argumentos enviados.
// arguments nao funciona em arrow function.
function funcao2() {// função para somar todos os numeros de parametro que enviar.
    let total = 0;
    for (let argumento of arguments) {// arguments pegando os parametros que enviei. 
        total += argumento;
    }
    console.log(total);// aparecera a soma de tudo.
}
funcao2(1, 2, 3, 4, 5, 6, 7);

/**********************************************/

function funcao3(a, b, c, d, e, f) {// valores nao enviados retornará como undefined. 
    console.log(a, b, c, d, e, f); 
}
funcao3(1, 2, 3);

/**********************************************/

function funcao4(a, b) {// valores nao enviados retornará como undefield. 
    // b = b || 0; -> valor padrão se b nao for enviado(modo antigo)
    console.log(a + b); 
}
funcao4(2);// retorna NaN, porque nao foi enviado o valor de 'b'.

/**********************************************/

// METODO MAIS NOVO DE DEDFINIR PADRÃO NA VARIAVEL SE ELA NAO FOR ENVIADA.
function funcao5(a, b = 2, c = 4) {
    console.log(a + b + c); 
}
funcao5(2, 10);// c = 4 -> valor padrão do 'c'
// funcao5(2,'', 20); -> vai contatenar e a soma vai da 220(junta e nao soma.)

/**********************************************/

// UNICA MANEIRA DE PULAR O VALOR E COM UNDEFINED 
function funcao6(a, b = 2, c = 4) {
    console.log(a + b + c); 
}
funcao6(2, undefined, 10);// pulei o envio do 'b' (assume valor padrão)

/**********************************************/

function pessoa({nome, sobrenome, idade}) {// desestruturação objeto
    console.log(nome, sobrenome, idade);
}
pessoa({nome: 'Yan', sobrenome: 'Wallas', idade: 25});

// outra maneira e jogando dentro da variavel primeiro
let obj = {nome: 'Luiz', sobrenome: 'otavio', idade: 29}
pessoa(obj);

/**********************************************/

function valor([valor1, valor2, valor3]) {// desestruturação array
    console.log(valor1, valor2, valor3);
}
valor(['teus', 'lima', 30]);// mesma coisa de cima, porem, com array 

/**********************************************/

// FUNCTION PARA SOMAR 
function conta(operador, acmulador, ...numero) {// (...) resto 
    for(let numeros of numero){
        acmulador += numeros;
    }
    console.log(operador, acmulador, numero);
}
conta('+', 0, 20, 30, 40, 50);
// sem os ... la em cima fica conta('+', 0, [20, 30, 40, 50]); cocm array.

/**********************************************/

// FUNCTION PARA DECIDIR O CALCULO  
function conta(operador, acmulador, ...numero) {// (...) resto operador
    for(let numeros of numero){
        if (operador === '+') acmulador += numeros;
        if (operador === '-') acmulador -= numeros;
        if (operador === '/') acmulador /= numeros;
        if (operador === '*') acmulador *= numeros;
    }
    console.log(operador, acmulador, numero);
}
conta('*', 1, 20, 30, 40, 50);
// '*' -> o acumulador 0, vai da 0(0 * qualquer numero = 0)
//'-' -> o acumulador 0 da negativo (0 - qualquer numero = numero negativo).

/**********************************************/

//OUTRA FORMA DE FAZER JOGANDO NA CONST (FUNCTION EXPRESSION )
const conta1 = function(operador, acmulador, ...numero) {// (...) resto operador
    for(let numeros of numero){
        if (operador === '+') acmulador += numeros;
        if (operador === '-') acmulador -= numeros;
        if (operador === '/') acmulador /= numeros;
        if (operador === '*') acmulador *= numeros;
    }
    console.log(operador, acmulador, numero);
};
conta1('*', 1, 20, 30, 40, 50);

/**********************************************/

const conta2 = function(operador, acmulador, ...numero) {
    console.log(arguments);
};
conta2('*', 1, 20, 30, 40, 50);

/**********************************************/

// NÃO TEM ARGUMENTS QUANDO NAO TEM FUNCTION E TEM =>
const conta3 = (operador, acmulador, ...numero) => {
    console.log(operador, acmulador, ...numero);
};
conta3('*', 1, 20, 30, 40, 50);

/**********************************************/

const conta4 = (...args) => {
    console.log(args);
};
conta4('*', 1, 20, 30, 40, 50);