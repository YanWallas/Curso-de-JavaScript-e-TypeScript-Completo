const mongoose = require('mongoose');
const validator = require('validator');

/*TRATAMENTO DOS DADOS QUE VAO SER SALVO NO BANCO DE DADOS MONGO.
OBS: Se nao tratar, mongoDB salva os dados de qualquer jeito.*/

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, requerid: true },
  sobrenome: { type: String, requerid: false, default: '' },
  email: { type: String, requerid: false, default: '' },
  telefone: { type: String, requerid: false, default: '' },
  CriadoEm: { type: Date, default: Date.now },
  
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function() {// async porque conecta com a base de dados.
  this.valida();
  if(this.errors.length > 0) return;//Verificando se tem errors 
  this.contato = await ContatoModel.create(this.body);//Criando objeto na base de dados.
};

Contato.prototype.valida = function() {
  this.cleanUp();

  // Validação
  // E-mail valido
  // Nome
  // Precisa ter algum contato,mail ou telefone.
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
  if(!this.body.email && !this.body.telefone) { 
    this.errors.push('Envie Pelos menos um contato (e-mail ou telefone)');
  }
};

Contato.prototype.cleanUp = function() {
  for(const key in this.body) { //For vai passar em todos os body do forms
    if(typeof this.body[key] !== 'string') {//Se algum deles e diferente de string.
      this.body[key] = '';//O body diferente de string, recebe o valor vazio.
    }
  }

  this.body = { //body do form recebe.
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;//Se id nao for uma string, retorne.
  this.valida();// chamando o valida.
  if(this.errors.length > 0) return;//Se tiver errors, retorna.
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });//Encontrando o contato por id, e atualizando seus dados.
};

// Métodos Estáticos

Contato.buscaPorId = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id);
  return contato;
};

Contato.buscaContatos = async function() {
  const contatos = await ContatoModel.find()
    .sort({ CriadoEm: -1 });
  return contatos;
};

Contato.delete = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findOneAndDelete({_id: id});
  return contato;
};

module.exports = Contato;