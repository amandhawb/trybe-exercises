// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

const promise = new Promise ((resolve, reject) => {
  function getRandom() {
    return Math.floor(Math.random() * 50) + 1;
  }
  let array = [];
  for (let i = 0; i < 10; i +=1) {
    array.push(getRandom());
  }
  const newArray = array.map((value) => value ** 2);
  const sumOfNewArray = newArray.reduce((acc, curr) => acc + curr);

  (sumOfNewArray < 8000) ? resolve(sumOfNewArray) : reject(sumOfNewArray);
})
//const arrayParaDividir = [2, 3, 5, 10];

promise
  .then(sumOfNewArray => console.log([2, 3, 5, 10].map(value => sumOfNewArray / value)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));