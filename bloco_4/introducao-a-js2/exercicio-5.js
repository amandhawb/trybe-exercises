// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// 1. Cria-se a variável (x) que ficará os maiores números. Primeiramente contém o valor 0;
// 2. Para passar por todos os valores é necessário do for;
// 3. Para descobrir o maior valor usamos a condição (if) de que se o número que está sendo percorrido [index], for maior que a variável (x);
    //3.1. Atribuimos o [index] à variável (x).
// 4. Fora do for imprimimos (console.log) a variável (x) que contém a resposta do nosso maior número.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
biggerNumber = 0;

for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > biggerNumber){
        biggerNumber = numbers[index];
    }
}
console.log(biggerNumber);

