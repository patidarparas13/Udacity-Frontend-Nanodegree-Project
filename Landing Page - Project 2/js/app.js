/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

const navBarList = document.getElementById('navbar__list');
const navBarElements = document.querySelectorAll('section');

navBarElements.forEach(el => {
    const navListElement = `<li class='menu__link' data-link=${el.id}><a href="#${el.id}" class="a__link">${el.dataset.nav}</li>`
    navBarList.insertAdjacentHTML('beforeend', navListElement)
});

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];
window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
document.querySelectorAll('a[href^="#"]').addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
});