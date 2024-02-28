//FUNCTION DE TRATAMENTO.

const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {//Caminho
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });// vai renderizar o index dentro da pasta views.

};
