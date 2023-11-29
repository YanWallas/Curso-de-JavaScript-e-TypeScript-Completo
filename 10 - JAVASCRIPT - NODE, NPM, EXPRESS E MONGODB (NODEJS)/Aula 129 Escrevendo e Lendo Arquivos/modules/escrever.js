const fs = require('fs').promises;

/*-> fs.writeFile() é usado para gravar de forma assíncrona os dados especificados em um arquivo. 
Por padrão, o arquivo seria substituído se existir. O parâmetro 'options' pode ser usado para 
modificar a funcionalidade do método.*/

module.exports = (caminho, dados) => {
fs.writeFile(caminho, dados, { flag: 'w' });//->\n -> para quebrar a linha.
};

// flag: 'w' -> vai escrever e substituir os arquivos.
// flag: 'a' -> vai acrescentar arquivos sem apagar o antigo.