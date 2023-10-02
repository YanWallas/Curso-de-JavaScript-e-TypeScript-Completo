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