import form from "./blocks/form.js";
import menu from "./blocks/menu.js";
import slider from "./blocks/slider.js";
import scrollToAnchor from "./modules/scrollToAnchor.js";

window.addEventListener("DOMContentLoaded", () => {
  menu();
  slider(".swiper_clients");
  scrollToAnchor();
  form();
});
