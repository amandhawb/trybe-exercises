// PARTE II No Bloco 4 você desenvolveu um projeto para testar os seus conhecimentos em Javascript e lógica de programação: o Playground functions. Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as Higher Order Functions e as features do Javascript ES6.

// 1. Para as funções encode e decode crie os seguintes testes:
// a. Teste se encode e decode são funções;
// b. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// c. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// d. Teste se as demais letras/números não são convertidos para cada caso;
// e. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

function mapString(objectMap, string) {
  const stringToArray = string.split('');
  let stringMaped = stringToArray.map((character) => {
    if(objectMap[character]) {
      return objectMap[character];
    }
    return character;
  });
  stringMaped = stringMaped.join('');
  return stringMaped;
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 
  }
  return mapString(map, string)
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  return mapString(map, string);
}

function techList() {

}

module.exports = {
  encode,
  decode,
}