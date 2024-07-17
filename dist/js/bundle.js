"use strict";

var _form = _interopRequireDefault(require("./blocks/form.js"));
var _menu = _interopRequireDefault(require("./blocks/menu.js"));
var _slider = _interopRequireDefault(require("./blocks/slider.js"));
var _scrollToAnchor = _interopRequireDefault(require("./modules/scrollToAnchor.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
window.addEventListener("DOMContentLoaded", function () {
  (0, _menu["default"])();
  (0, _slider["default"])(".swiper_clients");
  (0, _scrollToAnchor["default"])();
  (0, _form["default"])();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function form() {
  var emailInput = document.getElementById("emailInput");
  var errorMessage = document.getElementById("error-message");
  var btn = document.getElementById("btn_submit");
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  btn.addEventListener("click", function () {
    if (validateEmail(emailInput.value)) {
      console.log("Subscribed email:", emailInput.value);
      emailInput.value = "";
      errorMessage.textContent = "";
      alert("Thank you for subscribing!");
    } else {
      errorMessage.textContent = "Please enter a valid email address.";
    }
  });
  emailInput.addEventListener("input", function () {
    if (validateEmail(emailInput.value)) {
      errorMessage.textContent = "";
    } else {
      errorMessage.textContent = "Please enter a valid email address.";
    }
  });
}
var _default = exports["default"] = form;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function menu() {
  var menuBtn = document.querySelector(".header__btn-menu"),
    overlay = document.querySelector(".overlay"),
    menu = document.querySelector(".header__navigation"),
    menuLink = document.querySelectorAll(".header__menu__link");
  menuBtn.addEventListener("click", function () {
    overlay.classList.toggle("overlay_active");
    menu.classList.toggle("header__navigation_active");
  });
  menuLink.forEach(function (item) {
    item.addEventListener("click", function () {
      overlay.classList.remove("overlay_active");
      menu.classList.remove("header__navigation_active");
    });
  });
  overlay.addEventListener("click", function () {
    overlay.classList.remove("overlay_active");
    menu.classList.remove("header__navigation_active");
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function scrollToAnchor() {
  var links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        var progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}
var _default = exports["default"] = scrollToAnchor;