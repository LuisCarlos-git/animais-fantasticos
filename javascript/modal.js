export default function modal() {
  const activeButton = document.querySelector('[data-modal="modal"]');
  const closeButton = document.querySelector('[data-close="button-close"]');
  const modalContainer = document.querySelector(
    '[data-madal="modal-container"]'
  );

  if (activeButton && closeButton && modalContainer) {
    function activeModal(event) {
      event.preventDefault();
      modalContainer.classList.add("active");
    }
    function closeModalButton() {
      modalContainer.classList.remove("active");
    }

    function clickCloseModalContainer(event) {
      const modal = event.target;

      if (modal === this) {
        closeModalButton();
      }
    }

    activeButton.addEventListener("click", activeModal);
    closeButton.addEventListener("click", closeModalButton);
    modalContainer.addEventListener("click", clickCloseModalContainer);
  }
}
