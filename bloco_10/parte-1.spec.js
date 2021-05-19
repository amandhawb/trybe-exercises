const { sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
} = require('./parte-1');

describe('Exercise number 1', () => {
  it('sums two values', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('call the error', () => {
    expect(() => { sum ('1', '2') }).toThrow();
  });
  it('call the error with the right sentence', () => {
    expect(() => { sum ('1', '2') }).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('Exercise number 2', () => {
  it('new array with no item', () => {
    expect(myRemove([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
  });
  it('new array with no item using NOT toEqual', () => {
    expect(myRemove([1, 2, 3, 4], 4)).not.toEqual([1, 2, 3, 4]);
  });
  it('new array with no item', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercise number 3', () => {
  it('same logic but with no copy', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
  });
  it('same logic but with no copy and using NOT toEqual', () => {
    expect(myRemove([1, 2, 3, 4], 4)).not.toEqual([1, 2, 3, 4]);
  });
  it('same logic but with no copy', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercise number 4', () => {
  it('return fizzbuzz if num is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  });
  it('return fizz if number is divisible by 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz')
  });
  it('return buzz if number is divisible by 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz')
  });
  it('return false if is not a number', () => {
    expect(myFizzBuzz('a')).toEqual(false)
  });
  it('return the number if is not divisible by 3 neither by 5', () => {
    expect(myFizzBuzz(4)).toEqual(4)
  });
});

describe('Exercise number 5', () => {
  it('compare two object', () => {
    const obj1 = {
      title: 'My Title',
      description: 'My description',
    };
    const obj2 = {
      description: 'My description',
      title: 'My Title',
    };
    const obj3 = {
      title: 'My different title',
      description: 'My description'
    };
    expect(obj1).toEqual(obj2)
    expect(obj1).not.toEqual(obj3)
    expect(obj2).not.toEqual(obj3)
  })
})