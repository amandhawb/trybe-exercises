// 7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. Dica: cada inicial termina com um ponto.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
const expectedResult = 'O Senhor dos Anéis';

const verificaInicialCorreta = (string) => {
  return string.length === 2 && string[1] === '.'
}

function authorWith3DotsOnName() {
  const result = books.filter ((value) => {
    let pieces = value.author.name.split(' ');
    if (pieces.length > 3) {
      let firstValid = verificaInicialCorreta(pieces[0])
      let secondValid = verificaInicialCorreta(pieces[1])
      let thirdValid = verificaInicialCorreta(pieces[2])
      return firstValid && secondValid && thirdValid;
    }
  });
  const result2 = result.map ((value) => {
    return value.name;
  });
  return result2[0];
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);