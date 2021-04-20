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

var picker = new Pikaday({
  field: document.getElementById("datepicker"),
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
});

new window.JustValidate(".js-form", {
  focusWrongField: true,

  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});
