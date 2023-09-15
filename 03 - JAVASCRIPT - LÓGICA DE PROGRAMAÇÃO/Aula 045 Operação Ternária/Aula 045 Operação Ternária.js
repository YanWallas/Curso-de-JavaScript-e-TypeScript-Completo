/* 
********************** OPERADORES TERNÁRIOS ***************************
? --> Operador que pode subistituir o if.
: --> Operador que pode subistituir p else. 
Exemplo:
--> (Condição) ? 'Valor para true' : 'Valor para false';
***************************************************************************
*/

const pontuacaoUsuario = 999;

/*
--> CONSTUÇÃO NORMAL DE IF E ELSE <--

if (pontuacaoUsuario >= 1000)  {
    console.log('Usuário Vip');
}
else {console.log('Usuário Normal');} */

// --> CONSTRUÇÃO USANDO OPERADORES TERNÁRIOS PARA SIMPLIFICAR O CODGIO <--
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
// nivelUsuario recebe pontuação maior igual a 100, se verdadeiro(?) variavel recebe Usuário Vip, se false(:) recebe Usuário Normal.

console.log(nivelUsuario);// variavel ja recebeu dentro dela a string.'Usuário Vip' ou 'Usuário Normal'.

const corUsuario = null;
const corPadrao = corUsuario || 'preta' // se usuário selecionar cor, vai parecer ela, se nao vai aparecer a cor preta.(usando o Operador 'OU')

console.log(nivelUsuario, corPadrao);