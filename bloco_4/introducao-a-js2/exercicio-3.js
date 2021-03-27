// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
     //A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// 1. Cria-se a variável (x) que ficará os valores somados. Primeiramente contém o valor 0;
// 2. Para passar por todos os valores é necessário do for;
// 3. Somamos o valor atual ([index]) com a váriavel (x) criada anteriormente. No primeiro momento a variável será zero, mas a partir do for irá incrementar.
// 4. Pega-se o resultado que está na variável (x) e divide-se pelo número total de elementos (10).

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index = 0; index < numbers.length; index +=1){
     let currentNumber = numbers[index];
     result = result + currentNumber;
}
console.log(result / 10);
