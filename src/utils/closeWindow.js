const closeModalWindow = function () {
  document.querySelector(".textWindow").classList.add("hidden");
  document.querySelector(".imageWindow").classList.add("hidden");
  document.querySelector(".videoWindow").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

export default closeModalWindow;
