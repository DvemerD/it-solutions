import form from "./blocks/form.js";
import menu from "./blocks/menu.js";
import slider from "./blocks/slider.js";
import tabs from "./blocks/tabs.js";
import scrollToAnchor from "./modules/scrollToAnchor.js";

window.addEventListener("DOMContentLoaded", () => {
  menu();
  slider(".swiper_clients");
  scrollToAnchor();
  form();
  tabs(
    ".portfolio__tabs__btns",
    ".portfolio__tab",
    ".portfolio__tab-content__inner",
    "btn_tab_active",
    true
  );
  tabs(
    ".services__tabs",
    ".services__tab",
    ".services__info",
    "btn_tab_active"
  );
});
