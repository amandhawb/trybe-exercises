// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// 1. Cria-se a variável (x) que ficará os valores somados. Primeiramente contém o valor 0;
// 2. Para passar por todos os valores é necessário do for;
// 3. Somamos o valor atual ([index]) com a váriavel (x) criada anteriormente. No primeiro momento a variável será zero, mas a partir do for irá incrementar.
// 4. Pega-se o resultado que está na variável (x) e divide-se pelo número total de elementos (10).
// 5. Cria-se a condição (if) dizendo que se o valor já dividido for maior que vinte;
    //5.1 Se sim, deve imprimir (console.log) a frase pedida no exercício;
    //5.2 Senão (else), imprime (console.log) a frase pedida no exercício. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index = 0; index < numbers.length; index +=1){
     let currentNumber = numbers[index];
     result = result + currentNumber;
}
let division = result / 10;

if (division > 20){
    console.log('Valor maior que 20.')
} else{
    console.log('Valor menor ou igual a 20.')
}