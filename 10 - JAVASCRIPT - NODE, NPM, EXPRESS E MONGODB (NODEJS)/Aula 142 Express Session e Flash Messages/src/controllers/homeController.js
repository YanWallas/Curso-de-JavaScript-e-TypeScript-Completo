//FUNCTION DE TRATAMENTO.

exports.paginaInicial = (req, res) => {//Caminho
    req.session.usuario = { nome: 'yan', logado: true };//vai ficar 7 dias salvo.
    console.log(req.session.usuario);
    req.flash('success', ' Msg com sucesso');//msg de flash, aparece, mas atualizou some.
    console.log(req.flash('success'));
    res.render('index');// vai renderizar o index dentro da pasta views.
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);// rota do views.
    return;
};