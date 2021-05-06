// USANDO FOR:

const array = [4, 7, 10, 22, 89];
let biggerNumber = 0;
for (let i = 0; i < array.length; i +=1) {
  if (array[i] > biggerNumber) {
    biggerNumber = array[i];
  }
};
console.log(biggerNumber);

// USANDO REDUCE:

const array2 = [4, 7, 10, 22, 89];
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = array2.reduce(getBigger, 0);
console.log(bigger);

// SOMA TODOS OS PARES:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const numerosFiltrados = numbers.filter((value) => {
 return value %2 === 0;
});
const getSum = (acc, value) => {
  return acc + value
}

// function getSum(acc, value) {
//   return acc + value
// }

const result = numerosFiltrados.reduce(getSum, 0)
console.log(result);

// numerosFiltrados = [18, 4, 76, 54]
// let acc = 0
// for(let i=0;i<numerosFiltrados.length;i+=1){
//   //i=3; currentNumber = 76, sum 98
//   const currentNumber = numerosFiltrados[i] 
//   acc = acc + currentNumber 
// }
// console.log(sum)