function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
/*
esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase);
    })
    .catch(e => console.log(e));*/

// Mesma coisa de cima usando Async e Await.
    async function executa() {
        try {
            const fase1 = esperaAi('Fase 1', 1000);// Sem await fica pendente
            console.log(fase1);

            setTimeout(function () {// Buscar a promise pedente.
                console.log('Essa promise estava pendente', fase1);
        }, 1100);

            const fase2 = await esperaAi('Fase 2', rand());
            console.log(fase2);

            const fase3 = await esperaAi('Fase 3', rand());
            console.log(fase3);

            console.log('Terminamos na fase:', fase3);
        } catch (e) {
            console.log(e);
        }
    }
    executa();

// Pending -> Pendente.
// Fullfilled -> resolvida.
// rejected -> Rejeitada.

/* EXPLICAÇÃO:

Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona 
retorna um valor, a Promise será resolvida com o valor retornado. Quando a função assíncrona 
lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função 
assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função 
assíncrona e retorna o valor resolvido.
*/