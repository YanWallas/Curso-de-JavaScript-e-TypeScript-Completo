// Como eu consegui solucionar 
let vara = 'A'; // B
let varb = 'B'; // C
let varc = 'C'; // A
let vard; // const vard = vara

vard = vara; // vard = A
vara = varb; // vara = B
varb = varc; // varb = C
varc = vard; // varc = A

console.log(vara, varb, varc);

/* Como o Professor ensinou

[vara, varb, varc] = [varb, varc, vara]; - solução com JavaScript um pouco mais avançado. 

console.log(vara, varb, varc); */
