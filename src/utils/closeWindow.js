//Function to close modal window so that we can pass it to several event listeners (btnCloseModal, overlay)
const closeModalWindow = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

export default closeModalWindow;
