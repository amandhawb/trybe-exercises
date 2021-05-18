// GAMES ACTIONS SIMULATOR

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1. Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const damageDragon = () => {
  let min = 15;
  let max = dragon.strength;
  let result = Math.floor(Math.random() * (max - min + 1) + min)
  return result;
}
console.log('DRAGON', damageDragon());

// 2. Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const damageWarrior = () => {
  let min = warrior.strength;
  let max = min * warrior.weaponDmg;
  let result = Math.floor(Math.random() * (max - min +1) + min);
  return result;
}
console.log('WARRIOR', damageWarrior());

// 3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const damageMage = () => {
  let min = mage.intelligence;
  let max = min * 2
  let damage = Math.floor(Math.random() * (max - min +1) + min);
  let mana = mage.mana;

  return {damage: (mana < 15) ? 'Não possuí mana suficiente': `${damage}`, mana: `${mana}`}
}

console.log('MAGE', damageMage());