// Promises -> Promessa.

function rand(min, max) {
    min *= 1000;// Colocando em Milissegundos(ms).
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);//gerando número aletorio. 
}

/*
function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}
 -> CHAMANDO ALEATORIAMENTE.
esperaAi('Frase 01', rand(1, 3));
esperaAi('Frase 02', rand(1, 3));
esperaAi('Frase 03', rand(1, 3)); */

/*Chamando Função de Callback
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}
esperaAi('Frase 01', rand(1, 3), function() {
    esperaAi('Frase 02', rand(1, 3), function() {
        esperaAi('Frase 03', rand(1, 3));
    });
});*/

// Chamando a Promisse
function esperaAi1(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(' BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi1('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi1('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi1(2222, rand(1, 3));// colocando o erro do reject.
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela.');
    })
    .catch(e => {
        console.log('ERROR:', e);
    });

console.log('Isso será exibido antes de qualquer promisse.');