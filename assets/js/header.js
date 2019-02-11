// Close mobile nav on click
const navItems = document.querySelectorAll('a.menu-item');
navItems.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById('toggle').checked = false;
  }, false);
})

// Set variables for key elements
var prodNav = document.getElementById('sub-nav-prod');
var prodToggle = document.getElementById('drop-prod');

var auNav = document.getElementById('sub-nav-au');
var auToggle = document.getElementById('drop-au');

// Establish a function to toggle the class "collapse"
function showProd() {
  prodNav.classList.remove('collapsed');
}
function hideProd() {
  prodNav.classList.add('collapsed');
}

function showAu() {
  auNav.classList.remove('collapsed');
}
function hideAu() {
  auNav.classList.add('collapsed');
}

// Add a click event to run the subNavToggle function
prodToggle.addEventListener('mouseover', showProd);
prodNav.addEventListener('mouseleave', hideProd);

auToggle.addEventListener('mouseover', showAu);
auNav.addEventListener('mouseleave', hideAu);