// Função Construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new) -> new e Obrigatorio para chamar a function.

function Pessoa(nome,sobrenome) {
    const ID = 123456; //variavel privadas

    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos (this -> anotação de ponto)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método')
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira')
p1.metodo();
p2.metodo();