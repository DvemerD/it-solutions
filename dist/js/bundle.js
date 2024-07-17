"use strict";

var _menu = _interopRequireDefault(require("./blocks/menu.js"));
var _slider = _interopRequireDefault(require("./blocks/slider.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
window.addEventListener("DOMContentLoaded", function () {
  (0, _menu["default"])();
  (0, _slider["default"])(".swiper_clients");
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _helpers = require("../modules/helpers.js");
function menu() {
  var menuBtn = document.querySelector(".header__btn-menu"),
    overlay = document.querySelector(".overlay"),
    menu = document.querySelector(".header__navigation"),
    menuLink = document.querySelectorAll(".header__menu__link");
  menuBtn.addEventListener("click", function () {
    overlay.classList.toggle("overlay_active");
    menu.classList.toggle("header__navigation_active");
    if (menu.classList.contains("header__navigation_active")) {
      (0, _helpers.disableScroll)();
    } else {
      (0, _helpers.enableScroll)();
    }
  });
  overlay.addEventListener("click", function () {
    overlay.classList.remove("overlay_active");
    menu.classList.remove("header__navigation_active");
    (0, _helpers.enableScroll)();
  });
}
var _default = exports["default"] = menu;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function slider(selector) {
  var swiper = new Swiper(selector, {
    slidesPerView: "auto",
    spaceBetween: 12,
    mousewheel: true,
    keyboard: true
  });
}
var _default = exports["default"] = slider;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableScroll = disableScroll;
exports.enableScroll = enableScroll;
function disableScroll() {
  var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollBarWidth + "px";
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.paddingRight = "";
  document.body.style.overflow = "auto";
}