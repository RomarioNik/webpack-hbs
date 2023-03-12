// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";
// import hbsBase from "./templates/base.hbs";
// import hbsList from "./templates/list.hbs";
// import hbsFrame from "./templates/frameworks.hbs";
// import hbsLibs from "./templates/libs.hbs";
// import { base, list, frameworks, libs } from "./data/hbsData";

// const root = document.querySelector("#root");
// const rootList = document.querySelector("#root > ul");
// const baseObj = hbsBase(base);
// const listObj = hbsList(list);
// const frameworksArr = hbsFrame(frameworks);
// const libArr = hbsLibs(libs);

// rootList.innerHTML = baseObj;
// root.innerHTML = listObj;
// rootList.innerHTML = frameworksArr;
// rootList.innerHTML = libArr;

const form = document.querySelector("#form");
const rootList = document.querySelector("#root > ul");

const LIST_STORAGE = "todoList";
form.addEventListener("submit", handleSubmitForm);
addEventListener("DOMContentLoaded", updateListFromLocalStorage);

function handleSubmitForm(e) {
  e.preventDefault();
  const value = e.target.elements.question.value;

  if (value) {
    rootList.insertAdjacentHTML("beforeend", `<li>${value}</li>`);
    addValueToStorage(value);
    form.reset();
  }
}

function addValueToStorage(value) {
  const valFromStorage = localStorage.getItem(LIST_STORAGE);

  if (valFromStorage) {
    let val = JSON.parse(valFromStorage);
    val = [...val, value];
    getValueFromStorage(val);
  } else {
    const arr = [];
    arr.push(value);
    getValueFromStorage(arr);
  }
}

function getValueFromStorage(value) {
  return localStorage.setItem(LIST_STORAGE, JSON.stringify(value));
}

function updateListFromLocalStorage() {
  const valFromStorage = localStorage.getItem(LIST_STORAGE);

  if (valFromStorage) {
    const data = JSON.parse(valFromStorage);
    const arr = data.map((el) => `<li>${el}</li>`).join("");
    rootList.insertAdjacentHTML("beforeend", arr);
  }
}
