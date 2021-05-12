// PARTE 2 - Exercício 1 //

// 1. Crie uma função que receba um número e retorne seu fatorial.

const fatorial = number => {
  if (number === 0) {
    return 1;
  }
  let numbersToMultiplicate = [];
  for (let i = number; i > 0; i -=1) {
    numbersToMultiplicate.push(i);
  }
  let result = 1;
  for (let i = 0; i < numbersToMultiplicate.length; i += 1) {
    result = result * numbersToMultiplicate[i];
  }
  return result;
};
console.log(fatorial(5));

// PARTE 2 - Exercício 2 //

function longestWord (phrase) {
  // passar por toda a frase e separar as palavras - usar split(' ')
  let palavras = phrase.split(' ');
  let atualMaior = '';
  for (let i = 0; i < palavras.length; i += 1) {
    let currentPalavra = palavras[i];
    if (currentPalavra.length > atualMaior.length) {
      atualMaior = currentPalavra;
    }
  }
    return atualMaior;
}

// PARTE 2 - Exercício 3 //
let clickCount = 0;
function handleClick (event) {
  clickCount +=1;
  document.getElementById('clicks').innerHTML = clickCount;
}

const button = document.getElementById('btn');
button.addEventListener('click', handleClick);

