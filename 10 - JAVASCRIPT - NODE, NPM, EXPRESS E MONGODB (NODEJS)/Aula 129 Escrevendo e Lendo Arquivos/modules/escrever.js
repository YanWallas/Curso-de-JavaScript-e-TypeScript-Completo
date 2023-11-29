const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

/*-> fs.writeFile() é usado para gravar de forma assíncrona os dados especificados em um arquivo. 
Por padrão, o arquivo seria substituído se existir. O parâmetro 'options' pode ser usado para 
modificar a funcionalidade do método.*/
console.log(caminhoArquivo);
//fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' });