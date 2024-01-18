const mongoose = require('mongoose');

/*TRATAMENTO DOS DADOS QUE VAO SER SALVO NO BANCO DE DADOS MONGO.
OBS: Se nao tratar, mongoDB salva os dados de qualquer jeito.*/

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, requerid: true },
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;