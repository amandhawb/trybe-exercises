const statesBrazil = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

for (let i = 0; i < statesBrazil.length; i += 1) {
  let stateName = statesBrazil[i];
  const createdOption = document.createElement("option");
  createdOption.text = stateName;
  const idState = document.getElementById("state");
  idState.appendChild(createdOption);
}

function validateForm() {
  const dateEl = document.getElementById("date");
  const dateValue = dateEl.value;
  const dateArray = dateValue.split("/");
  const day = parseInt(dateArray[0]);
  const month = parseInt(dateArray[1]);
  const year = parseInt(dateArray[2]);
  if (day <= 0 || day > 31) {
    // mensagem de erro
  }
  if (month <= 0 || day > 12) {
    // mensagem de erro
  }
  if (year < 0) {
    // menagem de erro
  }

  // quero passar por todos os elementos.
  // condições: o primeiro e segundo elemento (Dia) deve ser maiores que 0 e menores que  31;
  // condições: o terceiro elemento deve ser uma barra /;
  // condições: o quarto e quinto elemento (mês) devem ser maiores que 0 e menores que 12;
  // condições: o sexto elemento deve ser uma barra /;
  // condições: o sétimo, oitavo, nono e décimo elemento (ano) não podem ser negativos
  // se alguma das condições forem inválidas console.log mensagem de erro
}
