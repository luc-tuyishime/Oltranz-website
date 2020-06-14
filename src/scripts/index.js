import "../styles/index.scss";

let a = new WOW({});
a.init();

let header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header__scrolled");
  }
  if (window.scrollY == 0) {
    header.classList.remove("header__scrolled");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  });
});
