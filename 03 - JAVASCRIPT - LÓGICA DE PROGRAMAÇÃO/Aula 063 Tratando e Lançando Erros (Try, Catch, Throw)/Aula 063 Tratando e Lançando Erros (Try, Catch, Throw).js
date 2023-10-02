
try { // tenta executar o que esta dentro.
    console.log(naoExisto); // variavel nao declarada.
} catch (e) { // e -> eu que escolho o nome (vai cair o erro ai dentro.)
    console.log('naoExisto nao existe'); //tento e nao executou cai na função catch.
    console.log(e); 
}
// função bem identica a if e else.

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.'); // se der erro(for string), aparecera essa mensagem.
    } // throw new Error -> (no lugar de erro posso escolher o nome do erro caso preferir.)

    return x + y;
}

try {
console.log(soma(1, 2));
console.log(soma('2', 3));
} catch (error) {
    console.log(error); //-> jamais lança erro pro usuario ver.(fizemos agora apenas para teste)
}