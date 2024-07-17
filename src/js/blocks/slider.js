function slider() {
  var swiper = new Swiper(".my-swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    mousewheel: true,
    keyboard: true,
  });
}

export default slider;
