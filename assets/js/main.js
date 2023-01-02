const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  document.body.classList.toggle("full-screen");
  navList.classList.toggle("active");

  this.classList.contains("fa-bars")
    ? this.classList.replace("fa-bars", "fa-xmark")
    : this.classList.replace("fa-xmark", "fa-bars");
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  this.scrollY >= 70
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");
});
