function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    };
}

const p1 = criaPessoa('Yan', 'Wallas');
console.log(p1)