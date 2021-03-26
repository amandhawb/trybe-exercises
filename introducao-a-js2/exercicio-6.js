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
