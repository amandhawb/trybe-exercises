// Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript , dessa vez utilizando Jest.

// 1. A função sum(a, b) retorna a soma do parâmetro a com o b

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

function myRemove(arr, item) {
  return arr.filter((value) => {
    return (value !== item)
  });
}

// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

function myRemoveWithoutCopy(arr, item) {
  return arr.filter((value) => {
    return (value !== item)
  });
}

// 4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num %3 === 0) return 'fizz';
  if (num %5 === 0) return 'buzz';
  return num;
}

// 5. Compare dois objetos (JSON) para verificar se são idênticos ou não.
  // DISPENSA FUNÇÃO. TESTE FEITO DENTRO DO DESCRIBE DO TESTE.

module.exports = {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
}
