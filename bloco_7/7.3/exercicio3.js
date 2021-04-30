const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
const expected1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected1, [1, 2, 4]);

// 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4].
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.notDeepStrictEqual(expected2, [1, 2, 3, 4]);

// 3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações.
const expected3 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.notStrictEqual(expected3, [1, 2, 3, 4]);

// 4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.
const expected4 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected4, [1,2,3,4]);

