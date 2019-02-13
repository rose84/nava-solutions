// Close mobile nav on click
const navItems = document.querySelectorAll('a.close-main');
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

// Mobile navigation subnav
if (window.innerWidth < 768) {
  let sub = document.querySelectorAll('a.menu-item.sub')
  let close = document.querySelectorAll('div.close')
  sub.forEach(link => {
    link.addEventListener('click', () => {
      const data = link.getAttribute('data-sub')
      const nav = document.querySelector('ul#side-nav.'+data)
      nav.classList.add('active')
    })
  })
  close.forEach(back => {
    back.addEventListener('click', () => {
      let subNav = back.parentNode
      subNav.classList.remove('active')
    })
  })
}