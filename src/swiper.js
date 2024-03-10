new Swiper(".image-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
  touchRation: 5,
  loop: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  speed: 400,
});
