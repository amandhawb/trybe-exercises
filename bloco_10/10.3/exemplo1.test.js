const math = require('./exemplo1');
jest.mock('./exemplo1');

test('Faça o mock da funcão subtrair e teste sua chamada.', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(4, 2);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(4, 2);
  expect(math.subtrair(4, 2)).toBe(2);
});

test('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno.', () => {
  math.multiplicar.mockImplementation((a, b) => a * b);
  math.multiplicar(5, 2);

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar).toHaveBeenCalledWith(5, 2);
  expect(math.multiplicar(5, 2)).toBe(10);
});

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

describe('Faça o mock da função dividir e implemente um retorno padrão com o valor 15. Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
  test('Retorno padrão com o valor 15 e depois limpando o mock.', () => {
    math.dividir.mockImplementation((a, b) => a / b);
    math.dividir(45, 3);

    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(45, 3);
    expect(math.dividir(45, 3)).toBe(15);

    math.dividir.mockClear();
    expect(math.dividir(2, 5)).toBe(0.4);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledWith(2, 5);
  });
});

test('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
  // implementação original
  expect(math.subtrair(5, 2)).toBe(3);

  // criando o mock e substituindo a implementação
  const mockSubtrair = jest
  .spyOn(math, "subtrair")
  .mockImplementation((a, b) => a + b);

  math.subtrair(5, 1);
  expect(mockSubtrair).toHaveBeenCalledTimes(4);
  expect(mockSubtrair(5, 1)).toBe(6);
  expect(mockSubtrair).toHaveBeenCalledTimes(5);
  expect(mockSubtrair).toHaveBeenCalledWith(5, 1)

  // restaurando a implementação original
  math.subtrair.mockRestore();
  expect(math.subtrair(2, 1)).toBe(1);
});