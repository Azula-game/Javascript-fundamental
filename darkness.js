function myFunction() {
   var element = document.querySelector(".contact-form");
   element.classList.toggle("dark-mode");
   var element = document.querySelector(".section");
   element.classList.toggle("dark-mode");
   var element = document.querySelector("header");
   element.classList.toggle("the-dark");
   var element = document.querySelector("footer");
   element.classList.toggle("the-dark");
}

const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const menu = document.getElementsByClassName("menu")[0]

toggleBtn.addEvenlistener("click", () => {
  menu.classList.toggle("active");
})