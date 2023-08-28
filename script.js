"use strict";
import closeModalWindow from "./src/utils/closeWindow.js";
// import openWindow from "./src/utils/openWindow.js";

document.addEventListener("DOMContentLoaded", function () {
  //Text Window
  const buttonText = document.querySelector(".button-text");
  buttonText.addEventListener("click", function () {
    document.querySelector(".textWindow").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });

  //Image Window
  const buttonImage = document.querySelector(".button-image");
  buttonImage.addEventListener("click", function () {
    document.querySelector(".imageWindow").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });

  //Video Window
  const buttonVideo = document.querySelector(".button-video");
  buttonVideo.addEventListener("click", function () {
    document.querySelector(".videoWindow").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });
});


//Closing with button
const btnClose = document.querySelectorAll(".close-modal");
const overlay = document.querySelector('.overlay');

btnClose.forEach(button => {
  button.addEventListener('click', closeModalWindow);
});


//Closing with escape key
document.addEventListener('keydown', (e)=> {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModalWindow();
  }
});

//Closing with overlay
overlay.addEventListener('click', closeModalWindow);


