const Contato = require('../models/contatoModel');//Importando as informações do arquivo LoginModel.

exports.index = (req, res) => {
  res.render('contato', {
    contato: {}
  });
};

exports.register = async(req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();
      
    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);//Aparecerá essa mensagem.
      req.session.save(() => res.redirect('/contato/index'));//Pagina será salva e redirecionada para home.
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');//Aparecerá essa mensagem.
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));//Pagina será salva e redirecionada para home.
    return;
  } catch (e) {
      console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id)  return res.render('404');

  const contato = await Contato.buscaPorId(req.params.id);
  if(!contato) return res.render('404');

  res.render('contato', { contato });
};