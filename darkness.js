function myFunction() {
  var element = document.querySelector('header');
  element.classList.toggle('the-dark');
  var element = document.querySelector('footer');
  element.classList.toggle('the-dark');
  var element = document.querySelector('.contact-form');
  element.classList.toggle('dark-mode');
  var element = document.getElementsByClassName('section')[0];
  element.classList.toggle('dark-mode');
  var element = document.getElementsByClassName('about-us')[0];
  element.classList.toggle('dark-mode');
  var element = document.getElementsByClassName('content')[0];
  element.classList.toggle('dark-mode');
   var element = document.getElementsByClassName('work-ex')[0];
  element.classList.toggle('dark-mode');
  var element = document.querySelector('body');
  element.classList.toggle('dark-mode');
  var element = document.getElementsByClassName('row')[0];
  element.classList.toggle('dark-mode');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
     }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500); // Change time
}

/*
const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const menu = document.getElementsByClassName('menu')[0];

toggleBtn.addEvenlistener('click', () => {
  menu.classList.toggle('active');
});
*/
