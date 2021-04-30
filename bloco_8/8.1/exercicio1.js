// 1. Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const wakeUp = () => console.log('Acordando!!');

// 2. Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const coffeeTime = () => console.log('Bora tomar café!!');

// 3. Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const sleepTime = () => console.log('Partiu dormir!!');

// 4. Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. 
const doingThings = (function1, function2, function3) => {
  function1();
  if (function2 !== undefined) {
    function2();
  }
  if (function3 !== undefined) {
    function3();
  }
};
doingThings(wakeUp, coffeeTime, sleepTime);