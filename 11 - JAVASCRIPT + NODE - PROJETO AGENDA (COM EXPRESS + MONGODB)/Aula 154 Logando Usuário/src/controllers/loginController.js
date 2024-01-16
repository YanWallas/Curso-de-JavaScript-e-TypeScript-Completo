const Login = require('../models/LoginModel');//Importando as informações do arquivo LoginModel.

exports.index = (req, res) => {//Exportando a function index.
  if(req.session.user) return res.render('login-logado');//Se tiver logado, vai renderizar login-logado.
  return res.render('login'); //Redirecionando para pagina de login.(views)
}

exports.register = async function (req, res) {// Expostando a function register
  try {
    const login = new Login(req.body);//Importando function Login dentro da const(jogando o body do form dentro dela).
    await login.register(); // Chamando a função do login model.

    if(login.errors.length > 0) {//Se os forms de login tiver algum erro.
      req.flash('errors', login.errors);//flash de msg vai aparecer o erro pro usuário.
      req.session.save(function() {// Salva a session.
        return res.redirect('/login/index');//Redirecionando para rota de /login/index.(routes)
      });
      return;
    }

    //Se o form de login nao tiver nenhum erro, como verificado em cima.
    req.flash('success', 'Seu usúario foi criado com sucesso.');//Aparece a msg de sucess
    req.session.save(function() {
      return res.redirect('/login/index');//Redirecionando para rota de /login/index.(routes)
    });

  } catch (e) { // Se nenhuma das opções de cima der certo.
    console.log(e); // Aparece o erro
    return res.render('404');// E é direcionado para pagina 404.(views)
  }
};

exports.login = async function (req, res) {// Expostando a function login
  try {
    const login = new Login(req.body);//Importando function Login dentro da const(jogando o body do form dentro dela).
    await login.login(); // Chamando a função do login model.

    if(login.errors.length > 0) {//Se os forms de login tiver algum erro.
      req.flash('errors', login.errors);//flash de msg vai aparecer o erro pro usuário.
      req.session.save(function() {// Salva a session.
        return res.redirect('/login/index');//Redirecionando para rota de /login/index.(routes)
      });
      return;
    }

    //Se o form de login nao tiver nenhum erro, como verificado em cima.
    req.flash('success', 'Você entrou');//Aparece a msg de sucess
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('/login/index');//Redirecionando para rota de /login/index.(routes)
    });

  } catch (e) { // Se nenhuma das opções de cima der certo.
    console.log(e); // Aparece o erro
    return res.render('404');// E é direcionado para pagina 404.(views)
  }
};

exports.logout = function(req, res) {
  req.session.destroy();// Vai destroir a session quando clicar em sair.
  res.redirect('/');// Depois direcionar para home.
}