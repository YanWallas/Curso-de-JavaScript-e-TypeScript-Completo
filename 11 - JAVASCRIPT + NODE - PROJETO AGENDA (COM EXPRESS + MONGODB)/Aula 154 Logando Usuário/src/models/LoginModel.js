const mongoose = require('mongoose');// Biblioteca de programação orientada a objetos que cria uma conexão entre o MongoDB e o ambiente de tempo de execução JavaScript Node.js.
const validator = require('validator');// Validador de email.
const bcryptjs = require('bcryptjs');//Proteção de senha no servidor

/*TRATAMENTO DOS DADOS QUE VAO SER SALVO NO BANCO DE DADOS MONGO.
OBS: Se nao tratar, mongoDB salva os dados de qualquer jeito.*/

const LoginSchema = new mongoose.Schema({//Chamando function para organizar informação no banco de dados.
  email: { type: String, requerid: true },//Tipo do email string, e ele é requerido(campo obrigatório)
  password: { type: String, requerid: true }//Tipo do password string, e ele é requerido(campo obrigatório)
});

const LoginModel = mongoose.model('Login', LoginSchema);//Salvar o modelo de login no banco de dados.

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if(this.errors.length > 0) return; //Se meu array nao estiver vazio. 
    this.user = await LoginModel.findOne({ email: this.body.email});//Verificar se ja tem um email cadastrado no banco de dados.   

    if(!this.user) {//Se User nao existir.
      this.errors.push('Usuário não existe.');//adiciona em errors
      return;
    }

    //Se comparar senha digitada com senha do banco de dados, der false.
    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida');//adiciona em errors
      this.user = null;
      return;
    }
  }

  async register() {
    this.valida();
    if(this.errors.length > 0) return; //Se meu array nao estiver vazio.  

    await this.userExists();//Function para verificar se usuário ja foi cadastrado.

    if(this.errors.length > 0) return; //verificar de novo depois.

    const salt = bcryptjs.genSaltSync();// Vai gerar uma senha diferente no servidor.
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    this.user = await LoginModel.create(this.body);//Criar usuário no banco de dados com as informações.

  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email});//Verificar se ja tem um email cadastrado no banco de dados.

    if(this.user) this.errors.push('Usuário já existe.');//Se ja tiver email cadastrado, aparecera essa mensagem na tela.
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
    for(const key in this.body) { //For vai passar em todos os body do forms
      if(typeof this.body[key] !== 'string') {//Se algum deles e diferente de string.
        this.body[key] = '';//O body diferente de string, recebe o valor vazio.
      }
    }

    this.body = { //body do form recebe.
      email: this.body.email,//email que vai salvar no banco de dados: Recebe email do body
      password: this.body.password ////password que vai salvar no banco de dados: Recebe password do body
    };
  }
}


module.exports = Login; // exportando todo o modelo de login.