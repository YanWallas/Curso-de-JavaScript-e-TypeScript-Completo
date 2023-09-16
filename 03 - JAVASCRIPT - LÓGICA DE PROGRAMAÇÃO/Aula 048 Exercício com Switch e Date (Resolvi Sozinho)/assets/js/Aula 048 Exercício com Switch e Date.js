const h1 = document.querySelector('.container h1');

const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();

function DataAtual(data) {
    const dia = zeroAEsqueda(data.getDate());
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());

    return `${diaSemanat}, ${dia} de ${mesDoAno} de ${ano} ${hora}:${min}`   
}

function Mes(mes) {
    let mesDoAno;

    switch (mes) {
        case 0:
            mesDoAno = 'Janeiro';
        return mesDoAno;
        case 1:
            mesDoAno = 'Fevereiro';
        return mesDoAno;
        case 2:
            mesDoAno = 'Março';
        return mesDoAno;
        case 3:
            mesDoAno = 'Abril';
        return mesDoAno;
        case 4:
            mesDoAno = 'Maio';
        return mesDoAno;
        case 5:
            mesDoAno = 'Junho';
        return mesDoAno;
        case 6:
            mesDoAno = 'Julho';
        return mesDoAno;
        case 7:
            mesDoAno = 'Agosto';
        return mesDoAno;
        case 8:
            mesDoAno = 'Setembro';
        return mesDoAno;
        case 9:
            mesDoAno = 'Outubro';
        return mesDoAno;
        case 10:
            mesDoAno = 'Novembro';
        return mesDoAno;
        case 11:
            mesDoAno = 'Dezembro';
        return mesDoAno;
        default:
            mesDoAno = '';
        return mesDoAno;
    }
}

function DiaSemana(diaSemana) {
    let diaSemanat;

    switch (diaSemana) {
        case 0:
            diaSemanat = 'Domingo';
        return diaSemanat;
        case 1:
            diaSemanat = 'Segunda-feira';
        return diaSemanat;
        case 2:
            diaSemanat = 'Terça-feira';
        return diaSemanat;
        case 3:
            diaSemanat = 'Quarta-feira';
        return diaSemanat;
        case 4:
            diaSemanat = 'Quinta-feira';
        return diaSemanat;
        case 5:
            diaSemanat = 'Sexta-feira';
        return diaSemanat;
        case 6:
            diaSemanat = 'Sábado';
        return diaSemanat;
        default:
            diaSemanat = '';
        return diaSemanat;
    }
}

function zeroAEsqueda (num) {
    return num >= 10 ? num : `0${num}`;
}

const mesDoAno = Mes(mes)
const diaSemanat = DiaSemana(diaSemana)
const dataAtual = DataAtual(data);

h1.innerHTML = dataAtual;