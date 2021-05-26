const simulation = require('./exercicio4.5');
jest.mock('./exercicio4.5');
const simulation2 = jest.requireActual('./exercicio4.5')

describe('Handle functions using mock', () => {
  test('toUpperCase function with another implamantation', () => {
    const mockTest = jest
    .spyOn(simulation, 'upperCase')
    .mockImplementation(a => a.toLowerCase());

    expect(mockTest('AMANDHA')).toBe('amandha');
    expect(mockTest).toHaveBeenCalled();
    expect(mockTest).toHaveBeenCalledTimes(1);
    expect(mockTest).toHaveBeenCalledWith('AMANDHA');


    expect(simulation2.upperCase('amandha')).toBe('AMANDHA');
  });

  test('firstLetterUpperCase with another implamentation', () => {
    simulation.firstLetterUpperCase.mockImplementationOnce((a) =>
     a.slice(-1));
    expect(simulation.firstLetterUpperCase('testando')).toBe('o');
  });

  test('concatString with another implamentation', () => {
    simulation.concatStrings.mockImplementationOnce((a, b, c) =>
     `${a} ${b} ${c}`);
    expect(simulation.concatStrings('amandha', 'wingert', 'barok'))
      .toBe('amandha wingert barok');
  });
});