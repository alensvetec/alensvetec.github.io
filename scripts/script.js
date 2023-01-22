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

  function myFunction3() {
    var x = document.getElementById("article-section");
    if (x.className == "article-section") {
      x.className += " responsive";
    } else {
      x.className = "article-section";
    }
  }

  function myFunction4() {
    var x = document.getElementById("naslov-section");
    var y = document.getElementById("text-section")
    if (x.className == "naslov-section") {
      x.className += " responsive";
      y.className += " responsive";
    } else {
      x.className = "naslov-section";
      y.className = "text-section";
    }
  }

  function myFunction5() {
    var x = document.getElementById("naslov-section");
    var y = document.getElementById("contact-section");
    var z = document.getElementById("form-section");
    var a = document.getElementById("footer");
    if (x.className == "naslov-section") {
      x.className += " responsive";
      y.className += " responsive";
      z.className += " responsive";
      a.className += " responsive";
    } else {
      x.className = "naslov-section";
      y.className = "contact-section";
      z.className = "form-section";
      a.className = "footer about-footer";
    }
  }

  function myFunction6() {
    var x = document.getElementById("naslov-section");
    var z = document.getElementById("product-section");
    var a = document.getElementById("footer");
    if (x.className == "naslov-section") {
      x.className += " responsive";
      z.className += " responsive";
      a.className += " responsive";
    } else {
      x.className = "naslov-section";
      z.className = "product-section";
      a.className = "footer about-footer";
    }
  }

  function myFunction7() {
    var x = document.getElementById("naslov-section");
    var z = document.getElementById("product-section");
    var a = document.getElementById("footer");
    if (x.className == "naslov-section") {
      x.className += " responsive";
      z.className += " responsive";
      a.className += " responsive";
    } else {
      x.className = "naslov-section";
      z.className = "product-section";
      a.className = "footer about-footer";
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

function initMap() {
  
  const loc = { lat: 45.6126942, lng: 18.7588205 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: loc,
  });
  
  const marker = new google.maps.Marker({
    map: map,
    position: loc,
  });
}

window.initMap = initMap;