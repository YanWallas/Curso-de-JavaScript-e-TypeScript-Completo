//CLOSURES = A HABILIDADE QUE A FUNÇÃO TEM DE ACESSAR SEU ESCOPO LEXICO.

function retornFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornFuncao();
console.log(funcao);
console.dir(funcao);// mesmo coisa que console.log.


function retornFuncao1(nome) {
    return function () {
        return nome;
    };
}

const funcao1= retornFuncao1('Luiz');
const funcao2= retornFuncao1('Jõao'); // Mesma function sendo jogada em outra const com dados diferentes.
console.dir(funcao1());
console.dir(funcao2());