// return -> retorna o valor e sai da function.
// yield -> Codigo recebe o valor e sai da function, mais retorna a function pulando o primeiro yield e trazendo o valor do outro, coisa que o return nao faz.

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}
const g1 = geradora1();

console.log(g1.next().value); //Para ver o valor preciso do next().
console.log(g1.next().value); //Cada fez que eu chamar vem o proximo yield
console.log(g1.next());// Valor 3
console.log(g1.next());// me return undefined e falando que done: true (acabou, nao me retorna mais valor).

/**********************************************/

function* geradora2() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

const g2 = geradora2();
for (let valor of g2) {
    console.log(valor);
}

/**********************************************/

function* contador() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const cont = contador();
console.log(cont.next().value);// retorna 0 -> cada vez que chamar, entrega o proximo valor.
console.log(cont.next().value);// retorna 1
console.log(cont.next().value);// retorna 2
console.log(cont.next().value);// retorna 3
console.log(cont.next().value);// retorna 4

/**********************************************/

function* geradora3() {
    // Código qualquer ...
    yield 'Valor 01';
    // Código qualquer ...
    yield 'Valor 02';
    // Código qualquer ...
    yield 'Valor 03';
}

function* geradora4() {// uma function geradora chamando a outra.
    yield* geradora3();
    // Código qualquer ...
    yield 'Valor 04';
    // Código qualquer ...
    yield 'Valor 05';
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

/**********************************************/

function* geradora5() {// uma function geradora chamando a outra.
    yield function() {
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();