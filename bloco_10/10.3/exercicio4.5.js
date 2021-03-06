// 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const upperCase = (string) => string.toUpperCase();

const firstLetterUpperCase = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

const concatStrings = (first, second) => `${first} ${second}`;

module.exports = {upperCase, firstLetterUpperCase, concatStrings};