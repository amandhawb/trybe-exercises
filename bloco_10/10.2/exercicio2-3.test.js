const { getUserName } = require('./exercicio2-3');

describe('Tests from exercise 2 -- promise', () => {
  it('should return the name Mark', () => {
    expect.assertions(1);
    return getUserName(4).then(userName => {
      expect(userName).toEqual('Mark');
    });
  });
  it('should return the name Paul', () => {
    expect.assertions(1);
    return getUserName(5).then(userName => {
      expect(userName).toEqual('Paul');
    });
  });
  it('should returns an error', () => {
    expect.assertions(1);
    return getUserName(3).catch(error => {
      expect(error).toEqual({ error: 'User with 3 not found.' })
    });
  });
});

describe('Test from exercise 3 -- async/await', () => {
  it('should return the name Mark', async (done) => {
    const response = await getUserName(4);
    expect(response).toEqual('Mark');
    done();
  });
  it('should return the name Paul', async (done) => {
    const response = await getUserName(5);
    expect(response).toEqual('Paul');
    done();
  });
  it('should returns an error', async (done) => {
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
      done();
    }
  });
});