// 4. O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const { getRepos } = require('./exercicio4');

  it('should return the both repo in API', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';


    return getRepos(url).then(response => {
      expect(response).toContain('sd-01-week4-5-project-todo-list');
      expect(response).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
