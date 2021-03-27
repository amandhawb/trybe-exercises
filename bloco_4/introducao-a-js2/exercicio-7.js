// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// 1. Cria-se a variável (x) que ficará os menores valores.
    //1.1. A variável deve ser do tipo infinita, pois ainda não sabemos qual o menor número no array. Não podemos atribuir o 0 na variável, senão ela nunca mudará seu número;
// 2. Para passar por todos os valores é necessário do for;
// 3. Para descobrir se o valor é o menor que encontramos usamos a condição (if) de que se o número percorrido [index] for menor do que a variável (x - infinita);
    //3.1. Atribuimos o [index] à variável (x).
// 4. Ao final imprimimos (console.log) a informação contida na variável (x).

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = Infinity;

for (let index = 0; index < numbers.length; index +=1){
    if(numbers[index] < smallestNumber){
        smallestNumber = numbers[index];
    }
}
console.log(smallestNumber);