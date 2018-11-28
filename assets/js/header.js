// Set variables for key elements
var subNav = document.getElementById('sub-nav');
var navToggle = document.getElementById('drop');

// Establish a function to toggle the class "collapse"
function show() {
  subNav.classList.remove('collapsed');
}
function hide() {
  subNav.classList.add('collapsed');
}

// Add a click event to run the subNavToggle function
navToggle.addEventListener('mouseover', show);
subNav.addEventListener('mouseleave', hide);