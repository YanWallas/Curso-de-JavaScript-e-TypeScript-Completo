const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanatext;

//-->  CODIGO NORMAL USANDO IF, ELSE IF E ELSE <--
if (diaSemana === 0) {
    diaSemanatext = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanatext = 'Segundaa';
} else if (diaSemana === 2) {
    diaSemanatext = 'Terça';
} else if (diaSemana === 3) {
    diaSemanatext = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanatext = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanatext = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanatext = 'Sábado';
} else {
    diaSemanatext = ''
}

//--> NO CASO DO IF DE CIMA PODE FAZER SWITCH  ASSIM (QUASE NUNCA UTILIZADO) -->
switch (diaSemana) {
    case 0:// Caso seja 0, efetue essa condição.
        diaSemanatext = 'Domingo';
        break;//Se a condição for true, ja retorna ela.Caso nao for, verifica as outras.
    case 1:
        diaSemanatext = 'Segunda';
        break;
    case 2:
        diaSemanatext = 'Terça';
        break;
    case 3:
        diaSemanatext = 'Quarta';
        break;
    case 4:
        diaSemanatext = 'Quinta';
        break;
    case 5:
        diaSemanatext = 'Sexta';
        break;
    case 6:
        diaSemanatext = 'Sabado';
        break;
    default://Ultima condição para sair do bloco (igual else no final)
        diaSemanatext = '';
        break; //Opcional colocar aqui (default ja executa o comando de sair do bloco)
}


console.log(diaSemana, diaSemanatext);

//--> CRIANDO UMA FUNCTION PARA SWITCH <--  
function getDiaSemanaTexto(diaSemana) {
    let diaSemanatexto1;

    switch (diaSemana) {
        case 0:// Caso seja 0, efetue essa condição.
            diaSemanatexto1 = 'Domingo';
            return diaSemanatexto1;
        case 1:
            diaSemanatexto1 = 'Segunda';
            return diaSemanatexto1;
        case 2:
            diaSemanatexto1 = 'Terça';
            return diaSemanatexto1;
        case 3:
            diaSemanatexto1 = 'Quarta';
            return diaSemanatexto1;
        case 4:
            diaSemanatexto1 = 'Quinta';
            return diaSemanatexto1;
        case 5:
            diaSemanatexto1 = 'Sexta';
            return diaSemanatexto1;
        case 6:
            diaSemanatexto1 = 'Sabado';
            return diaSemanatexto1;
        default://Ultima condição para sair do bloco (igual else no final)
            diaSemanatexto1 = '';
            return diaSemanatexto1;
    }
}

const diaSemanatexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanatexto);