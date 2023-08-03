//Function to close modal window so that we can pass it to several event listeners (btnCloseModal, overlay)
const closeModalWindow = function (modal, overlay) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

export default closeModalWindow;
