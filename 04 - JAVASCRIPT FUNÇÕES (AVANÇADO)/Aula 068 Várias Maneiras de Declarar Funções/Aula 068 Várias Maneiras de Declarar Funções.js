// Declaração de função (FUNCTION HOISTING) = as função sao elevadas. pode usar antes e depois declarar.

function falaoi(){
    console.log("oie")
}
falaoi();// executando função.

// First-class objects (Objetos de primeira classe)
// FUNCTION EXPRESSION 
const souUmDado = function(){ // const recebe function anonima(sem nome) como dado.
    console.log("Sou um dado.")
}
souUmDado();

function executaFuncao(funcao) { //jogando uma função dentro de outra para executar.
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);// joguei a const da função anterior dentro ded outra função com outros parametros. 

// ARROW FUNCTION -> 
const funcaoArrow = () => {
    console.log("Sou uma arrow function")
};
funcaoArrow();

// Função dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou Falando...');
    }
};
obj.falar();

// Função dentro de um objeto sem a palavra function tambem funciona.
const obj1 = {
    falar1() {
        console.log('Estou Falando de novo...');
    }
};
obj1.falar1();


