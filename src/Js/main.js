// menu icon

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".backdrop"),
  menuIcon: document.querySelector(".menu-icon"),

  openModalBtnHero: document.querySelector(
    '[data-action="hero-modal-open-btn"]'
  ),
  closeModalBtnHero: document.querySelector(
    '[data-action="hero-modal-close-btn"]'
  ),
  backdropHero: document.querySelector(".hero-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

refs.openModalBtnHero.addEventListener("click", onOpenModalHero);
refs.closeModalBtnHero.addEventListener("click", onCloseModalHero);
refs.backdropHero.addEventListener("click", onBackdropClickHero);

function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log("Кликнули именно в бекдроп!!!!");
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

// HERO

function onOpenModalHero() {
  window.addEventListener("keydown", onEscKeyPressHero);
  document.body.classList.add("hero-show-modal");
}

function onCloseModalHero() {
  window.removeEventListener("keydown", onEscKeyPressHero);
  document.body.classList.remove("hero-show-modal");
}

function onBackdropClickHero(event) {
  if (event.currentTarget === event.target) {
    console.log("Кликнули именно в бекдроп!!!!");
    onCloseModalHero();
  }
}

function onEscKeyPressHero(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModalHero();
  }
}

// SWIPER

new Swiper(".image-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  speed: 400,
});
