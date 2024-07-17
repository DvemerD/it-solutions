function slider(selector) {
  const swiper = new Swiper(selector, {
    slidesPerView: "auto",
    spaceBetween: 12,
    mousewheel: true,
    keyboard: true,
  });
}

export default slider;
