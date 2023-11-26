module.exports = function(x , y) {
    return x * y;
};

//console.log(module.exports(2, 2));->So funciona nesse modulo assim, function nao feita para funcionar aqui dentro, apenas como exports.

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está fazendo au au`)
    }
};
