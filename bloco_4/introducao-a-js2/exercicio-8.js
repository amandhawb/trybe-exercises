// Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

// 1. Cria-se o array (x), vazio para que seja implementado os números solicitados;
// 2. Para "ir do 1 até 25" precisamos usar o for.
    // 2.1. Dentro do for o índex deve começar de 1, pois não queremos o número 0 no array;
    // 2.2. A condição de parada do for deve ser quando o número percorrido [index] estiver menor ou igual a 25.
//3. Adicionamos (.push) o número percorrido [index] no array (x).
//4. Imprimimos (console.log) o array (x) que contém os valores.

let myNumbers = [];

for(let index = 1; index <= 25; index +=1){
    myNumbers.push(index);
}
console.log(myNumbers);