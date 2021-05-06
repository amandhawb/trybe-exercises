// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function countA (string) {
  let sum = 0;
  for (let i = 0; i < string.length; i+=1) {
    if (string[i] === 'a' || string[i] === 'A') {
      sum += 1;
    }
  }
  return sum;
}

function containsA() {
  const result = names.reduce((acc, value) => {
    return acc + countA(value);
  }, 0);
  return result
}

assert.deepStrictEqual(containsA(), 20);