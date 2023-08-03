"use strict";
import closeModalWindow from "./src/utils/closeWindow.js";
import openModalWindow from "./src/utils/openWindow.js";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//Looping through the 3 buttons (which is basically an array holding all the buttons)
for (let i = 0; i < btnsOpenModal.length; i++) {
  //we input a function expression
  btnsOpenModal[i].addEventListener("click", openModalWindow);
}

btnCloseModal.addEventListener("click", closeModalWindow);

overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalWindow();
  }
});
