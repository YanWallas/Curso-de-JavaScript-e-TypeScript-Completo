
function funcao() {
    console.log("Oie");
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // o JavaScript nao vai executar esse parametro.

// Quando se usa a palavra function, existe uma ferramenta para ser utilizada.

function funcao1() {
    console.log(arguments);// ela sustenta tudo que enviei em objeto.podendo pegar o indice com [].
}
funcao1('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'luiz'); // o JavaScript vai executar esse parametro.

// arguments que sustenta todos os argumentos enviados.
// arguments nao funciona em arrow function.
function funcao2() {// função para somar todos os numeros de parametro que enviar.
    let total = 0;
    for (let argumento of arguments) {// arguments pegando os parametros que enviei. 
        total += argumento;
    }
    console.log(total);// aparecera a soma de tudo.
}
funcao2(1, 2, 3, 4, 5, 6, 7);

function funcao3(a, b, c, d, e, f) {// valores nao enviados retornará como undefield. 
    console.log(a, b, c, d, e, f); 
}
funcao3(1, 2, 3);