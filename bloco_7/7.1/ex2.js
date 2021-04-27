// PARTE 2 - Exercício 1 //

function fatorial (n){
  let numerosParaMultiplicar = [];
  for (let i = n; i > 0; i -= 1) {
    numerosParaMultiplicar.push(i);
  }
  let result = 1;
  for (let i = 0; i < numerosParaMultiplicar.length; i += 1) {
    result = result * numerosParaMultiplicar[i];
  }
  return result;
}

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

