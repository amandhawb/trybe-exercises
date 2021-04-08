const divUm = document.getElementById("divUm");
const divDois = document.getElementById("divDois");
const divTres = document.getElementById("divTres");
const input = document.getElementById("input");
const myWebpage = document.getElementById("mySpotrybefy");

function handleHover(event) {
  event.target.style.color = "red";
}
function handleDbClick(event) {
  window.location = "https://www.betrybe.com";
}

function handleOutroMouseOver(event) {
  divUm.classList.remove("tech");
  divDois.classList.remove("tech");
  divTres.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
}

function handleKeyPress(event) {
  let text = event.target.value;
  let elementoAtivo = document.getElementsByClassName("tech")[0];
  elementoAtivo.innerText = text;
}

input.addEventListener("keyup", handleKeyPress);
myWebpage.addEventListener("dblclick", handleDbClick);
myWebpage.addEventListener("mouseover", handleHover);

divUm.addEventListener("mouseover", handleOutroMouseOver);
divDois.addEventListener("mouseover", handleOutroMouseOver);
divTres.addEventListener("mouseover", handleOutroMouseOver);

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
