const a1 = [1,2,3];
const a2 = [4,5,6];
//const a3 = a1+a2; -> Nao da certo, apenas junta como string e nao array.
const a3 = a1.concat(a2, [7,8,9], 'Luiz'); // junção do array 1 com o 2 e mais um array e depois string(continua sendo tudo array(tudo um array só)).
console.log(a3);

/**********************************************/

const num1 = [1,2,3];
const num2 = [4,5,6];
//...rest -> com array muda o nome ...spread(para espalhar o array)
const num3 = [...num1, 'Luiz', ...num2, ...[7, 8, 9]];//fez a junção(permanece como array)
console.log(num3);