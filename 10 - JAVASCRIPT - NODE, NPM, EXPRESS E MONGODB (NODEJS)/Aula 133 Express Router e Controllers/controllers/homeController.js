//FUNCTION DE TRATAMENTO.

exports.paginaInicial = (req, res) => {//Caminho
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"> 
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar Formulário</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
};