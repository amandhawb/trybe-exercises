const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado.
const expected1 = myFizzBuzz(15);
assert.strictEqual(expected1, 'fizzbuzz');

// 2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado.
const expected2 = myFizzBuzz(3);
assert.strictEqual(expected2, 'fizz');

// 3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado.
const expected3 = myFizzBuzz(5);
assert.strictEqual(expected3, 'buzz');

// 4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado.
const expected4 = myFizzBuzz(2);
assert.strictEqual(expected4, 2);

// 5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado.
const expected5 = myFizzBuzz('número');
assert.strictEqual(expected5, false);