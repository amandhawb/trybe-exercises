// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

// 1. Cria-se a variável que ficará os valores somados. Primeiramente contém o valor 0;
// 2. Para passar por todos os valores é necessário do for;
// 3. Somamos o valor atual ([index]) com a váriavel criada anteriormente. No primeiro momento a variável será zero, mas a partir do for irá incrementar.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index = 0; index < numbers.length; index +=1){
     result = result + numbers[index];
}
console.log(result);

