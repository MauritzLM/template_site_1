// dark mode
// mobile nav

// navigation menu
let mobileNav = document.querySelector(".navigation");

// show menu
document.querySelector(".mobile-nav-button").addEventListener('click', (e) => {

    mobileNav.classList.toggle("show-menu");

});

// close menu
document.querySelector(".close-nav-button").addEventListener('click', () => {
    mobileNav.classList.toggle("show-menu");
});