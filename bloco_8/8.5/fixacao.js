// SPREAD OPERATOR

// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

const specialFruit = ['Mango', 'Banana', 'Apple'];
const additionalItens = ['Acai', 'Guarana', 'Papaia'];

const fruitSalad = (fruit, additional) => {
  return [... fruit, ...additional];
}

console.log(fruitSalad(specialFruit, additionalItens));

// PARAMETRO REST

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams('string', null, [1, 2, 3], { }));

// 

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(nationality);
