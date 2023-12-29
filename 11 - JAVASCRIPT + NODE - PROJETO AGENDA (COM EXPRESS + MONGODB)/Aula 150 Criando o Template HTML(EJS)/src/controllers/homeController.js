//FUNCTION DE TRATAMENTO.

exports.paginaInicial = (req, res) => {//Caminho
    res.render('index', {
        titulo: 'Este será o <span style="color: red;">título</span> da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });// vai renderizar o index dentro da pasta views.
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);// rota do views.
    return;
};