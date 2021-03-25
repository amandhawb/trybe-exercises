let number1 = 50;
let number2 = 40;
let number3 = 30;
let maiorNumber = null;

if (number1 > number2 && number1 > number3) {
    maiorNumber = number1;
} else if (number2 > number1 && number2 > number3) {
    maiorNumber = number2;
} else {
    maiorNumber = number3;
}
console.log(maiorNumber);
