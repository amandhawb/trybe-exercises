const { uppercase } = require('./exercicio1');

  it('should return the string in upperCase', done => {
    uppercase('amandha', (result) => {
      expect(result).toEqual('AMANDHA');
      done();
    });
  });
