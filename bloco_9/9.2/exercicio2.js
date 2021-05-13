// 2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise

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

  if (sumOfNewArray < 8000) {
    return resolve(sumOfNewArray);
  }
  reject(sumOfNewArray);
})
.then(sumOfNewArray => console.log('Promise resolvida'))
.catch(sumOfNewArray => console.log('Promise rejeitada'));