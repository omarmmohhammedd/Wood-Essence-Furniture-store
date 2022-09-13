let search_button = document.querySelector("#search");
let search_bar = document.querySelector(".search_bar");
let close_search_bar = document.querySelector("#close");
search_button.addEventListener("click", () => {
  search_bar.classList.add("active");
});
close_search_bar.addEventListener("click", () => {
  search_bar.classList.remove("active");
});
let carousel_items = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".dot");
function slide() {
  dots.forEach((ele) => {
    ele.addEventListener("click", () => {
      dots.forEach((e) => {
        e.classList.remove("active_dot");
      });
      carousel_items.forEach((e) => {
        e.classList.remove("active_item");
      });
      ele.classList.add("active_dot");
      carousel_items[ele.getAttribute("data-slide")].classList.add(
        "active_item",
        "animate__animated",
        "animate__fadeInRight"
      );
    });
  });
}
slide();
let i = 0;
const slider = setInterval(() => {
  i += 1;
  carousel_items.forEach((e) => {
    e.classList.remove("active_item");
  });
  dots.forEach((e) => {
    e.classList.remove("active_dot");
  });
  if (i > carousel_items.length - 1) {
    i = 0;
  }
  if (i <= carousel_items.length - 1) {
    carousel_items[i].classList.add(
      "active_item",
      "animate__animated",
      "animate__fadeInRight"
    );
    dots[i].classList.add("active_dot");
  }
}, 70000000);
let scrollBtn = document.querySelector("#scroll");
window.onscroll = () => {
  if (window.scrollY > 900) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
let toggle = document.querySelector("#toggle");
let sidebar = document.querySelector(".sidebar");
let close_sidebar = document.querySelector("#close_sidebar");
toggle.addEventListener("click", () => {
  sidebar.classList.add(
    "active_sidebar",
    "animate__animated",
    "animate__fadeInRight",
    "animate__fast"
  );
});
close_sidebar.addEventListener("click", () => {
  sidebar.classList.remove("active_sidebar");
});
