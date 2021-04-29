// PARTE II - Exercícios do dia:

// 1.
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const updateObject = (object, key, value) => {
  object[key] = value;
}

updateObject(lesson2, 'turno', 'manhã');

// 2.
const listKeys = (object) => {
  const result = Object.keys(object);
  return result;
}

listKeys(lesson3);

// 3.
const lengthObject = (object) => {
  const result = Object.keys(object).length;
  return result;
}

lengthObject(lesson3);

// 4.
const listValue = (object) => {
  const result = Object.value(object);
  //return result;
  console.log(result);
}

lengthObject(lesson3);
