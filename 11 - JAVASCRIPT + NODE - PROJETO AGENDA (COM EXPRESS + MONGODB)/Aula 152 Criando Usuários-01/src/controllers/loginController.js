const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
}

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register(); // Chamando a função do login model.

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    return res.send(login.errors);

  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};