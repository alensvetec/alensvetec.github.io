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