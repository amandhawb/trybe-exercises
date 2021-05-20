const { getListAnimal } = require('./exercicio6.2');

describe('Tests from exercice 6 part 2', () => {
  it ('should returns an object', () => {
    expect.assertions(1);
    return getListAnimal(1).then(animal => {
      expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }],);
    });
  });
  it ('should returns an error', () => {
    expect.assertions(1);
    return getListAnimal(3).catch(error => {
      expect(error).toEqual({ error: 'Não possui animal com essa idade.'});
    });
  });
});