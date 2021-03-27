// Utilizando o array criado no exercício anterior, imprima o resultado da divisão de cada um dos elementos por 2 .

// 1. Pega-se o array (x criado anteriormente).
// 2. Percorremos (for) o array (x);
    //2.1. Enquanto percorremos dividimos o número percorrido [index] por 2 (/2) e acrescentamos esse número dividido em uma variável (y);
    //2.2. Substituímos o array (x) anterior para os números guardados na variável (y);
// 3. Imprimimos (console.log) o array (x) que contém os números que estavam guardados na variável (y).


let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for(let index = 0; index<myNumbers.length; index +=1){
    let divided = myNumbers[index] / 2;
    myNumbers[index] = divided;
}
console.log(myNumbers);
