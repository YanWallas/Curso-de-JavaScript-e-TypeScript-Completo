const fs = require('fs').promises;// Trabalhar com caminhos.
const path = require('path');// Tratar dos caminhos.

/*fs.readdir(path.resolve(__dirname))//Escanear as pastas que pedi, caminho da pasta(__dirname).
    .then(files => console.log(files))//vai retorna so os arquivos dentro dessa pasta.
    .catch(e => console.log(e));*/

//OBS: readdir() : lê os conteúdos de um diretório. -> fs. readFile() : lê os conteúdos de um arquivo.

//Use a opção <rootDir> para incluir o caminho para o diretório raiz do seu projeto, para evitar que ele ignore acidentalmente todos os seus arquivos em diferentes ambientes que podem ter diretórios raiz diferentes.

async function readdir(rootDir) {//vai delegar um serviço para function de baixo.
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);// Jogando o conteúdo na const.
    walk(files, rootDir);//Jogando os arquivos na function walk.
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);//de acordo com a pasta, vai compor o arquivo.
        const stats = await fs.stat(fileFullPath);//vai fazer estatistica do arquivo

        if(/\.git/g.test(fileFullPath)) continue;//Se for da pasta git, continue.
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {//se for um diretorio.
            readdir(fileFullPath);// vai mandar o diretorio para a function
            continue;//para nao parar o laço caso seja true.
        }

        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue;//verificando apenas arquivos de css e html.

        console.log(file, stats.isDirectory());// so pedindo a estatistica se ele e um diretorio.
        console.log(fileFullPath);
    }
}

readdir('D:/Documentos/GitHub/Curso-de-JavaScript-e-TypeScript-Completo');