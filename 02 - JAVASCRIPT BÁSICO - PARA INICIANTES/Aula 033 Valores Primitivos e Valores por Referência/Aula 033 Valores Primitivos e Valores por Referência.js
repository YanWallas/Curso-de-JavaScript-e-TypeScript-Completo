/*
Primitivos(Valor Imutáveis) - String, Numeber, Boolean, Undefined, Null, (bigint, symbol)
valores Copiados.
*/
//          0123
let nome = 'Luiz';//posso substituir a o elemento inteiro, tiranddo ele e colocando outro, nao parte dele
nome[0] = 'R'; // Nao troca a letra, pois e dado imutável.
console.log(nome[0], nome);// vai continuar com a letra L.

let a = 'A';
let b = a;// fazendo copia do dado primitivo, ambas sao independente.
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // valor de b nao altera, pq fizemos a copia do a para ele.

/* 
Referência (Mutável) - array, Object, Function
valores Passados por Referência.
*/

let A = [1,2,3];
let B = A;//Vai apontar no mesmo local que o A, dados passado por referencia.
let C = B;// C vai pegar o mesmo resultado que A e B.
console.log(A,B);// vai demostrar o mesmo valor.

A.push(4);//Acrescentando o numero 4 apenas no A.
console.log(A,B);// Vai mostrar alteração nos dois, A e B apontam para o mesmo lugar na memoria, nao faz copia .

B.pop();//Removendo o 4 apenas do B
console.log(A,B);//Vai mostrar alteração nos dois do mesmo jeito, porque os dois aponta no mesmo lugar na memoria.


A.push('Luiz');
console.log(C);
// Mesmo alterando valor de A, altera valor do B e C tambem, pois todos estão apontando o mesmo valor na memoria por referencia. 

let D = [1,2,3];
let E = [...D];// Aqui eu estou fazendo a copia do D, mesmo alterando nao modifica o E.
let F = E;
console.log(D,E);

D.push(4);//Acrescentando o numero 4 apenas no D.
console.log(D,E);// Valor do E, nao e alterado por foi feito uma coipa, e nao esta mais por referencia.

E.pop();//Removendo o ultimo numero de E, que seria o 3
console.log(D,E);//Vai mostrar alteração apenas no E, a variavel D continua com o 4 e a variavel E, perdeu o numero 3.


D.push('Luiz');
console.log(D, E, F);
// Mesmo alterando valor de D, variavel E e F nao altera o valor, porque la no começo foi feito uma copia e nao referencia de valor.

const c = { // tambem funciona com object
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const d = c;
console.log(d);// recebeu o valor de 'c' por referencia.
c.nome = 'João';// alterando valor de 'c', tambem altera valor de 'd'
console.log(d);

