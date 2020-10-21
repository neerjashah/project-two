var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
// get the overlay element
var overlaymenu = document.getElementById("overlaymenu");
function toggleMenu() {

    menu.classList.toggle("active");
  

    overlaymenu.classList.toggle("active");
  }
//
// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);

//execute toggle function from menu on click

//menu.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click
overlaymenu.addEventListener("click", toggleMenu);
