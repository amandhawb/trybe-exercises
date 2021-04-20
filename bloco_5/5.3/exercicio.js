function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

function createDaysOfMonth() {
  let ul = document.getElementById("days");

  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let currentDayNumber = dezDaysList[i];
    let currentDayElement = document.createElement("li");
    currentDayElement.innerText = currentDayNumber;
    currentDayElement.numeroOriginal = currentDayNumber;

    currentDayElement.classList.add("day");
    ul.appendChild(currentDayElement);
    if (
      currentDayNumber === 24 ||
      currentDayNumber === 25 ||
      currentDayNumber === 31
    ) {
      currentDayElement.classList.add("holiday");
    }
    if (
      currentDayNumber === 4 ||
      currentDayNumber === 11 ||
      currentDayNumber === 18 ||
      currentDayNumber === 25
    ) {
      currentDayElement.classList.add("friday");
    }
  }
}
createDaysOfMonth();

function createButtonHoliday(string) {
  let buttonElement = document.createElement("button");
  buttonElement.id = "btn-holiday";
  buttonElement.innerHTML = string;
  let divElement = document.getElementsByClassName("buttons-container")[0];
  divElement.appendChild(buttonElement);
}
createButtonHoliday("Feriados");

function changeColorHoliday() {
  let holidayElements = document.querySelectorAll(".holiday");
  for (let i = 0; i < holidayElements.length; i += 1) {
    let currentHolidayElement = holidayElements[i];
    let newColor = "green";
    if (currentHolidayElement.style.backgroundColor === "green") {
      newColor = "rgb(238,238,238)";
    }
    currentHolidayElement.style.backgroundColor = newColor;
  }
}

let clickHoliday = document.getElementById("btn-holiday");
clickHoliday.addEventListener("click", changeColorHoliday);

function createButtonFriday(string) {
  let buttonElement = document.createElement("button");
  buttonElement.id = "btn-friday";
  buttonElement.innerHTML = string;
  let divElement = document.getElementsByClassName("buttons-container")[0];
  divElement.appendChild(buttonElement);
}
createButtonFriday("Sexta-Feira");

function changePhraseFriday() {
  let fridayElement = document.querySelectorAll(".friday");
  for (let i = 0; i < fridayElement.length; i += 1) {
    let currentFridayElement = fridayElement[i];
    let newPhrase = "friyay!";
    if (currentFridayElement.innerText === "friyay!") {
      newPhrase = currentFridayElement.numeroOriginal;
    }
    currentFridayElement.innerText = newPhrase;
  }
}

let clickFriday = document.getElementById("btn-friday");
clickFriday.addEventListener("click", changePhraseFriday);

function biggerElement(event) {
  let elementSelected = event.target;
  elementSelected.style.fontSize = "28px";
}
function smallerElement(event) {
  let elementSelectedSmall = event.target;
  elementSelectedSmall.style.fontSize = "20px";
}

let dayList = document.querySelectorAll(".day");
for (let i = 0; i < dayList.length; i += 1) {
  dayList[i].addEventListener("mouseover", biggerElement);
  dayList[i].addEventListener("mouseout", smallerElement);
}
