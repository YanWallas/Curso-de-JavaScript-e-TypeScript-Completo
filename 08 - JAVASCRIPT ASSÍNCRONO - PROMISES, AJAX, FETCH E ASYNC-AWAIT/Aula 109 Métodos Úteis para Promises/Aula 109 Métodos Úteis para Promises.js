function rand(min, max) {
    min *= 1000;// Colocando em Milissegundos(ms).
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);//gerando número aletorio. 
}

// Chamando a Promisse
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.resolve
// Promise.reject

/*
const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 100),
    'Outro Valor'
];

Promise.all(iterable) -> retorna uma única Promiseque resolve quando
todas as promessas no argumento iterável foram resolvidos ou quando o
iterável passado como argumento não contém promessas.
É rejeitado com o motivo da primeira promessa que foi rejeitada.

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });
*/

/***********************************************************************/

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    //esperaAi(1000, 1000),
];
    
/* Promise.race(iterable) -> retorna uma promessa que resolve ou rejeita assim que uma das promessas não iterável resolver ou rejeitar, com o valor ou razão daquela promessa.*/
    
Promise.race(promises)
    .then(function(valor1) {
        console.log(valor1);
    })
    .catch(function(erro1) {
        console.log(erro1);
    });

function baixaPag() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache.');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPag()
    .then(dadosPagina => {console.log(dadosPagina);})
    .catch(e => console.log(e));