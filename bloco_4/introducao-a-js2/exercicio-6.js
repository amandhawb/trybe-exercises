// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// 1. Cria-se o array (x) que ficará os valores ímpares. Primeiramente está vazia. Usamos o array, porque podemos ter mais de um valor. 
// 2. Para passar por todos os valores é necessário do for;
// 3. Para descobrir se o valor é ímpar usamos a condição (if) de que se o número percorrido [index] tiver algum número restante na sua divisão (%2 ===1);
    //3.1. Atribuimos o [index] ao array (x). (utiliza-se o .push);
// 4. Cria-se uma segunda condição (if) fora da 3. para que se o array (x) estiver vazio (=== 0);
    //4.1 Imprimimos (console.log) a mensagem solicitada pelo exercício;
    //4.2 Senão (else) se o array (x) possui algum valor, imprimimos (console.log) os valores contidos no array.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorImpar = [];

for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] % 2 === 1) {
        valorImpar.push(numbers[index]);
    }
}
if (valorImpar.length === 0){
    console.log('Nenhum valor ímpar encontrado.');
} else {
    console.log(valorImpar);
}
