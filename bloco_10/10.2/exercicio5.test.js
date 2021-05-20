// Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

// primeiro: '1 - beforeEach';
// segundo: '1 - test';
// terceiro: '1 - afterEach';
// quarto: '1 - beforeEach';
// quinto: '2 - beforeEach;
// sexto: '2 - test'
// sétimo: '2 - afterEach';
// oitavo: '1 - afterEach';

