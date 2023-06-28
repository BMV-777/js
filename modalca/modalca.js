const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdrop);

function onOpenModal() {
  window.addEventListener("keydown", keyDown);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", keyDown);
  document.body.classList.remove("show-modal");
}

function onBackdrop(e) {
  console.log(e.currentTarget);
  console.log(e.target);

  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function keyDown(e) {
  console.log(e.code);

  const KEY_CODE = "Escape";

  if (e.code === KEY_CODE) {
    onCloseModal();
  }
}
