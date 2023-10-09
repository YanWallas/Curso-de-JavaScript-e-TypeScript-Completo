function rand(min= 1000, max= 3000) { // gerando numeros automaticos.
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
//console.log(rand()); -> testando o codigo.

// setTimeout => colocado apenas para simular a dentro de algo findo da API ou banco de dados.

function f1() {
    setTimeout(function () {
        console.log('f1');
    }, 500);
}

function f2() {
    setTimeout(function () {
        console.log('f2');
    }, 1000);
}

function f3() {
    setTimeout(function () {
        console.log('f3');
    }, 800);
}

f1();
f2();
f3();
console.log('Olá Mundo');

/**********************************************/

// CRIANDO CALLBACK
function f4(callback) { // jogando o callback na function
    setTimeout(function () {
        console.log('f4');
        if (callback) callback();// se a função receber um callback, return callback.
    }, rand());// fazendo a simulação de um tempo de espera (gerando tempo aleatorio.)
}

function f5(callback) {
    setTimeout(function () {
        console.log('f5');
        if (callback) callback();
    }, rand());
}

function f6(callback) {
    setTimeout(function () {
        console.log('f6');
        if (callback) callback();
    }, rand());
}

// JOGO FUNCTION QUANDO DENTRO DA INDENTAÇÃO NA OUTRA DE CHAMAR A FUNÇÃO PARA RETURN CALLBACK.
f4(function() { // Assim vai rodar o f4 primeiro.
    f5(function() { // depois roda f5. (chamando a f5 dentro da função callback da f4)
        f6(function() { // chamo a função f6, dentro da f5 que esta dentro da f4.
            console.log('Olá Mundo!'); // exibirá o console por ultimo, pq esta dentro de tudo.
        });
    });
});

// OUTRA MANEIRA DE CHAMAR A FUNCAO CALLBACK

f4(f4Callback); // chamo a função f4, jogando uma determinação dentro dela chamando o callback.

function f4Callback() { // crio a função que chama o f4Callback.
    f5(f5Callback); // dentro dela chamo a function f5Callback que vou criar;
}

function f5Callback() { //crio a função que chama o f5Callback.
    f6(f6Callback); // dentro dela chamo a function f6Callback que vou criar;
}

function f6Callback() { //crio a função que chama o f6Callback.
    console.log('Olá Mundo!'); // dentro dela aparece a msg dentro do console.
}

