// 6.1 Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animals = Animals.find((animal) => animal.name === name);
    if (animals) {
      return resolve(animals)
    };

    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(list => list)
};

module.exports = { getAnimal };
