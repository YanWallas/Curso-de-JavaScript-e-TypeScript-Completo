//FUNCTION DE TRATAMENTO.

exports.paginaInicial = (req, res) => {//Caminho
    res.render('index');// vai renderizar o index dentro da pasta views.
};

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
};