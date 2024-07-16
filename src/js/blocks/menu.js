import { disableScroll, enableScroll } from "../modules/helpers.js";

function menu() {
  const menuBtn = document.querySelector(".header__btn-menu"),
    overlay = document.querySelector(".overlay"),
    menu = document.querySelector(".header__navigation"),
    menuLink = document.querySelectorAll(".header__menu__link");

  menuBtn.addEventListener("click", () => {
    overlay.classList.toggle("overlay_active");
    menu.classList.toggle("header__navigation_active");

    if (menu.classList.contains("header__navigation_active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay_active");
    menu.classList.remove("header__navigation_active");

    enableScroll();
  });
}

export default menu;
