exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');//Se resposta do local erro, der erro, coloca o flash(msg) para executar.
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next();
};

exports.outroMiddleware = (req, res, next) => {
   
    
  next();
};

exports.checkCsrfError = (err, req, res, next) => {//Exportando uma função que verifica se a checagem do csrf tem erro.
  if(err) { //Se tiver erro.
    return res.render('404');// rendireciona para pagina 404.
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {//Exportando uma função que verifica se tem se csrf esta correto no middleware(antes de carregar a pagina.)
  res.locals.csrfToken = req.csrfToken();
  next();
};