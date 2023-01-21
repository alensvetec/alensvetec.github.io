  function myFunction() {
    var x = document.getElementById("dropdown-nav");
    if (x.className == "nav-button") {
      x.className += " responsive";
    } else {
      x.className = "nav-button";
    }
  }

  function myFunction2() {
    var x = document.getElementById("about");
    if (x.className == "about") {
      x.className += " responsive";
    } else {
      x.className = "about";
    }
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  } 

var navbar = document.getElementById("navbar");
window.onscroll = function() {navbarFunction()};
var sticky = navbar.offsetTop;

function navbarFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", navbarFunction);