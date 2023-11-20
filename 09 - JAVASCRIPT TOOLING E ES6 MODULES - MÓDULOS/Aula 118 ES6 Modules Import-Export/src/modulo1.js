const nome = 'Luiz';
const sobrenome = 'Miranda';
export const idade = 30;// posso exporta direto tambem.

function soma(x, y) {
    return x + y;
}

export { nome as nome3 };// Exportando a const para index.js, mudando o nome.
export { sobrenome, soma };// Exportando tudo agora.

export class Pessoa {
    constructor(nome, sobrenome) {
        this.n0me = nome;
        this.s0bren0me = sobrenome;
    }
}

export default function soma1(x, y) {//default faz o que for exporta virar padrao.(so pode declaração padrao uma vez por arquivo)
    return x + y;
}