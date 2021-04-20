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

function createButton(string) {
  let buttonElement = document.createElement("button");
  buttonElement.id = "btn-holiday";
  buttonElement.innerHTML = string;
  let divElement = document.getElementsByClassName("buttons-container")[0];
  divElement.appendChild(buttonElement);
}
createButton("Feriados");

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
