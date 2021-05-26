const simulation = require('./exercicio1.2');
jest.mock('./exercicio1.2');

test('Random number function using mock', () => {
  simulation.randomNumber = jest.fn().mockReturnValue(10);

  simulation.randomNumber();
  expect(simulation.randomNumber).toHaveBeenCalled();
  expect(simulation.randomNumber()).toBe(10);
  expect(simulation.randomNumber).toHaveBeenCalledTimes(2);

  simulation.randomNumber.mockImplementationOnce((a, b) => a / b);
  expect(simulation.randomNumber(10, 5)).toBe(2);
  expect(simulation.randomNumber).toHaveBeenCalledTimes(3);

  simulation.randomNumber.mockImplementation((a, b, c) => a * b * c);
  expect(simulation.randomNumber(2, 2, 2));
  expect(simulation.randomNumber).toHaveBeenCalled();
  expect(simulation.randomNumber(2, 2, 2)).toBe(8);
  expect(simulation.randomNumber).toHaveBeenCalledTimes(5);

  simulation.randomNumber.mockReset();
  simulation.randomNumber.mockImplementationOnce((a) => a * 2);
  expect(simulation.randomNumber(100)).toBe(200);
  expect(simulation.randomNumber).toHaveBeenCalledTimes(1);
});
