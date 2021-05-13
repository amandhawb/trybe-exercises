// 4. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

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
  console.log(sumOfNewArray);
  (sumOfNewArray < 8000) ? resolve(sumOfNewArray) : reject(sumOfNewArray);
})
//const arrayParaDividir = [2, 3, 5, 10];

promise
  .then(sumOfNewArray => {
    const temp = [2, 3, 5, 10].map(value => sumOfNewArray / value)
    return temp
  })
    .then(array => {
      const result = array.reduce((acc, curr) => acc + curr )
      console.log(result);
    })
  .catch(sumOfNewArray => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));