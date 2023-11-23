const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

/*EXPORTANDO DO NODE.JS
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;*/

// MANEIRA RESUMIDA DE EXPORTA
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "this e atrelado ao module.exports";

console.log(module.exports); 

class Pessoa {
    constructor(nome1) {
        this.nome1 = nome1;
    }
}
exports.Pessoa = Pessoa;