// DOM
// change kerne ke poore process mein
// Selection
var home = document.querySelector("#home");

// CSS change
home.style.color = "blue";

// html change
home.innerHTML = "<i>Abdul Wahab</i>";
// text change
// home.textContent = "<i>As it is without changing the tag!</i>";
// adding listeners
home.addEventListener("mouseenter", function () {
  home.style.color = "red";
});
home.addEventListener("mouseleave", function () {
  home.style.color = "black";
});
