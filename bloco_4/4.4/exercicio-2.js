// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(word){
  let wordInvert = '';
  for(let i = word.length -1; i >= 0; i--){
    wordInvert = wordInvert + word[i];
  }
  if(wordInvert === word){
    return true;
  } else{
    return false;
  }

}
verificaPalindromo('arara');


// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggerNumber(array){
let big = 0;
  for(let i = 0; i < array.length; i+=1){
    if (array[i] > big){
      big = array[i];
    }
  }
  return big;
}
biggerNumber([2, 3, 6, 7, 10, 1]);

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallerNumber(array){
  let small = Infinity;
  for (let i = 0; i < array.length; i+=1){
    if (array[i]<small){
      small = array[i];
    }
    return small;
  }
}
console.log(smallerNumber([2, 3, 6, 7, 10, 1]));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggerName(array){
  let bigName = ' ';
  for (let i = 0; i < array.length; i+=1){
    if (array[i].length > bigName.length){
      bigName = array[i];
    }
  }
  return bigName;
}
console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repetNumber(array){
  let most = 0;
  let contador = 0;
  for (let i = 0; i < array.length; i+=1){
    contador = array[i];
    for (let i = 0; i < array.length; i+=1){
      if (array[i] === contador){
        most = array[i];
      } 
    }
  }
  return most
}

console.log(repetNumber( [2, 3, 2, 5, 8, 2, 3]));

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.




