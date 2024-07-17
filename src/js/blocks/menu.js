function menu() {
  const menuBtn = document.querySelector(".header__btn-menu"),
    overlay = document.querySelector(".overlay"),
    menu = document.querySelector(".header__navigation"),
    menuLink = document.querySelectorAll(".header__menu__link");

  menuBtn.addEventListener("click", () => {
    overlay.classList.toggle("overlay_active");
    menu.classList.toggle("header__navigation_active");
  });

  menuLink.forEach((item) => {
    item.addEventListener("click", () => {
      overlay.classList.remove("overlay_active");
      menu.classList.remove("header__navigation_active");
    });
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay_active");
    menu.classList.remove("header__navigation_active");
  });
}

export default menu;
