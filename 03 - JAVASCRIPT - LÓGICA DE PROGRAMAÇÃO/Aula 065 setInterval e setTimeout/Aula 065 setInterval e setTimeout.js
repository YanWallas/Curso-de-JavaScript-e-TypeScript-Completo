function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });        
}

function funcaoDoInteval() {
    console.log(mostraHora())
}

//setInterval(funcaoDoInteval, 1000);

//setInterval (function () { -> tag para gerando a hora automatica. 
//    console.log(mostraHora());
//}, 1000); -> buscando de 1 em 1 seg. 

const timer = setInterval (function () { //colocando tudo dentro da variavel. 
    console.log(mostraHora());
}, 1000);

setTimeout(function() { // function que so funciona 1 vez para parar a contagem.
    clearInterval(timer);
}, 5000); // milissegundo e representado por 1000(1 seg).

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);