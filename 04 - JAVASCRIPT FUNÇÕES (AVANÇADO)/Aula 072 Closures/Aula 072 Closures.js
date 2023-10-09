function retornFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornFuncao();
console.log(funcao);