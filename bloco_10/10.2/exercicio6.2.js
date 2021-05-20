// 6.2  Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    const arrayAnimals = Animals.filter((animal) => animal.age === age);
    if (arrayAnimals.length !== 0) {
      return resolve(arrayAnimals);
    };

    return reject({ error: 'Não possui animal com essa idade.'})
  })
);

const getListAnimal = (age) => (
  findAnimalsByAge(age).then(list => list)
);


module.exports = { getListAnimal };