// Função Construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new) -> new e Obrigatorio para chamar a function.

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira')