let controle = 0;

while (controle <= 10) {// pode ser usado For porque nao muda nada.
    console.log(controle);
    controle++;
}

const nome = 'Luiz';
let i = 0;

while (i < nome.length) {// pode ser usado For porque nao muda nada.
    console.log(nome[i]);
    i++;
}

console.log('#################');

// ************** WHILE - ESTRUTURA DE REPETIÇÃO **************
// Mais usando para quando a condição der false, ele sai do laço(não sabemos quando sai do laço).
//se a condição for verdadeira ele entra no laço, se return false, ano entra no laço.

function random(min, max) {
    const r = Math.random() * (max - min) + min;//vai geral um numero aleatorio.
    return Math.floor(r);//Arredondando num1 para baixo.
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

while (rand !== 10) {// se o numero aleatorio for diferente de 10, continua o laço. se nao ele sai do laço.
    rand = random(min, max);
    console.log(rand);
}

console.log('#################');

// ************** DO WHILE - ESTRUTURA DE REPETIÇÃO **************

//Executa o codigo e depois verifica a condição.

do { // E o Mesmo codigo
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10); // verifica a condição depois.
