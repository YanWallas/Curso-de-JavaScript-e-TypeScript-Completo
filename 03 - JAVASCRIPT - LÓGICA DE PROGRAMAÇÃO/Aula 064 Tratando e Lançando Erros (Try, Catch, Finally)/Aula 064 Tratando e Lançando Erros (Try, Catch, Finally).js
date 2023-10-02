try {
    //È executada quando não há erros
} catch (e) {
    // È executada quando há erros
}
finally {
    // Sempre é executado com erro ou sem.
}

try {
    console.log("Abri um arquivo");
    console.log("Manipulei o arquivo e gerou erro");
    console.log("Fechei o arquivo");

    try {// gerando um try dentro de outro.
        console.log(b);// gerando um erro de proposito.
    }catch(err) {
        console.log("Deu erro");
    } finally {
        console.log('Também sou finally.');
    } 

} catch (erro) {
    console.log("Tratando o arquivo")
} finally { 
    console.log('FINALLY: Eu Sempre sou executado');
}

function retornaHora(data) {
    if (!(data instanceof Date)) {// pode ter string ou numbber da erro.(tem que ser formato de data.)
        console.log("Não é");
    }
}

retornaHora(new Date());

function retornaHora1(data) {
    if (data && !(data instanceof Date)) {// se a data for enviada e nao for uma instancia de date (da erro)
        throw new TypeError('Esperando instância de Date')
    }

    if (!data) {// se a data nao for enviada
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', //hora com 2 digitos (menor que 10, aparece o '0' antes)
        minute: '2-digit',//minutos com 2 digitos
        second: '2-digit', //segundos com 2 digitos
        hour12: false // horario de 12 horas false(vai da o horario de 24hrs)

    });

}

try{
    const data = new Date('01-01-1997 12:58:12'); // criando o data.
    const hora = retornaHora1();// se eu colocar algo que nao é instancia de date dentro da function, vai tratar o erro.
    console.log(hora);
} catch(e){
    // Tratar erro
} finally{
    console.log('Tenha um Bom dia');
}