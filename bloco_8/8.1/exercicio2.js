// 1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newPerson = (nomeCompleto) => {
  let nomeSplit = nomeCompleto.split(' ');
  let nomeJoin = nomeSplit.join('_');
  let nomeFinal = nomeJoin.toLowerCase();
  let email =  `${nomeFinal}@trybe.com`
    const response = {
      nomeCompleto: nomeCompleto,
      email: email,
    }
    return response;
};

const newEmployees = (createEmployee) => {
  const employees = {
    id1: createEmployee('Pedro Guerra'),
    id2: createEmployee('Luiza Drumond'),
    id3: createEmployee('Carla Paiva'),
  }
  return employees;
}
(newEmployees(newPerson));

// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numeroSorteado = (numeroApostado, premiadoOuNao) => {
  let numeroAleatorio = Math.floor(Math.random() * 6);
}
const premiadoOuNao = ()
