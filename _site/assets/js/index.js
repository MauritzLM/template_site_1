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


// FAQ toggle

const faqItems = document.querySelectorAll(".faq-item");
const images = document.querySelectorAll(".faq-item img");
const answers = document.querySelectorAll(".faq-item .answer");

for (let i = 0; i < faqItems.length; i++) {
      faqItems[i].addEventListener("click", (e) => {
        answers[i].classList.toggle("hidden");
        // update image src*
        answers[i].classList.contains("hidden") ? images[i].src = "../assets/icons/add.svg" : images[i].src = "../assets/icons/remove.svg";
        console.log(e);
      });
};