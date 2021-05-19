const {
  encode,
  decode,
} = require('./parte-2');

describe('Exercise number 1', () => {
  it ('Function encode is defined', () => {
    expect(encode).toBeDefined();
  });
  it('Test if encode is a function', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Test the logic of encode', () => {
    expect(encode('a e i o u')).toEqual('1 2 3 4 5');
  });
  it('Test the others letters', () => {
    expect(encode('a b c d e')).toEqual('1 b c d 2');
  });
  it('Test if return the same length - encode', () => {
    expect(encode('hi there')).toHaveLength(8);
  });
  it ('Function decode is defined', () => {
    expect(decode).toBeDefined();
  });
  it('Test if decode is a function', () => {
    expect(typeof decode).toEqual('function');
  });
  it('Test the logic of decode', () => {
    expect(decode('1 2 3 4 5')).toEqual('a e i o u');
  });
  it('Test if return the same length - decode', () => {
    expect(decode('h3 th2r2')).toHaveLength(8);
  });
});

describe('Exercise number 2', () => {
  
})