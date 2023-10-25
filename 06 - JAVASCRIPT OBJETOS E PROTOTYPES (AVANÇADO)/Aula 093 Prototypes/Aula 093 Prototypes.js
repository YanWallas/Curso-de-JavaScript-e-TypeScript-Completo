/*
JavaScript é baseado em protítipos para passar propriedades e métodos de um objeto para outro.

Definição de Protótipo -> Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções. Se

Todos os objetos tem uma referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos acessar um membro no próprio objeto e depois a cadeia de protótipos
é usada atéo topo (null) até encontrar (ou não) tal membro.
*/ 

// Ordem de verificação (pessoal -> Pessoa.prototype -> Object.prototype)

//Construtora -> molde (Classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; -> Dentro da função(Sempre vai criar um protótipo quando gerar nova pessoa)
}

//Protótipo para cria metodos dentro a função construtora, sem esta dentro da função.(Toda nova pessoa criada puxa uma link de referencia, nao precisa ser dentro da função ocupando espaço sempre que uma nova pessoa e criada)
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

//Instância
const pessoa1 = new Pessoa('Luiz', 'O.');// <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.');// <- Pessoa = Função Construtora
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);