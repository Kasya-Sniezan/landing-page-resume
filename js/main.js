const e = document.querySelector(".header__icon"),
  t = document.querySelector(".header__body"),
  o = document.querySelector(".menu__list"),
  c = document.querySelector(".lang__row");
e &&
  e.addEventListener("click", function (s) {
    document.body.classList.toggle("_lock"),
      e.classList.toggle("_active"),
      t.classList.toggle("_active"),
      o.classList.toggle("_active"),
      c.classList.toggle("_active");
  });
const s = document.querySelectorAll(".menu__link[data-goto]");
if (s.length > 0) {
  function a(c) {
    const s = c.target;
    if (s.dataset.goto && document.querySelector(s.dataset.goto)) {
      const a =
        document.querySelector(s.dataset.goto).getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;
      e.classList.contains("_active") &&
        (document.body.classList.remove("_lock"),
        e.classList.remove("_active"),
        t.classList.remove("_active"),
        o.classList.remove("_active")),
        window.scrollTo({
          top: a,
          behavior: "smooth",
        }),
        c.preventDefault();
    }
  }
  s.forEach((e) => {
    e.addEventListener("click", a);
  });
}
