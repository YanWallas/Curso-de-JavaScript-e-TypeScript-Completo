//FUNCTION DE TRATAMENTO.

exports.paginaInicial = (req, res, next) => {//Caminho
    console.log('Respondendo ao cliente');
    res.render('index');// vai renderizar o index dentro da pasta views.
    console.log(`'PaginaInicial' Olha o que tem na req.session.nome: ${req.session.nome}`);
    next();
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);// rota do views.
};