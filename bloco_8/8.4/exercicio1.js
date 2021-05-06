// 1. Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const result = arrays.reduce((acc, value) => {
    for (let i = 0; i < value.length; i+=1) {
      acc.push(value[i])
    }
    return acc 
  }, []);
  return result
}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);