const mongoose = require('mongoose');
const validator = require('validator');// Validador de email.
const bcryptjs = require('bcryptjs');//Proteção de senha no servidor

/*TRATAMENTO DOS DADOS QUE VAO SER SALVO NO BANCO DE DADOS MONGO.
OBS: Se nao tratar, mongoDB salva os dados de qualquer jeito.*/

const LoginSchema = new mongoose.Schema({
  email: { type: String, requerid: true },
  password: { type: String, requerid: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.valida();
    if(this.errors.length > 0) return; //Se meu array nao estiver vazio.  

    await this.userExists();//Function para verificar se usuário ja foi cadastrado.

    if(this.errors.length > 0) return; //verificar de novo depois.

    const salt = bcryptjs.genSaltSync();// Vai gerar uma senha diferente no servidor.
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    try {
      this.user = await LoginModel.create(this.body);
    } catch(e) {
      console.log(e);
    }
  }

  async userExists() {
    const user = await LoginModel.findOne({ email: this.body.email});//Verificar se ja tem um email cadastrado no banco de dados.

    if(user) this.errors.push('Usuário já existe.');//Se ja tiver email cadastrado, aparecera essa mensagem na tela.
  }

  valida() {
    this.cleanUp();

    // Validação
    // O e-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    // A senha precisa ter entre 3 e 50
    if(this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
  }

  cleanUp() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}


module.exports = Login;