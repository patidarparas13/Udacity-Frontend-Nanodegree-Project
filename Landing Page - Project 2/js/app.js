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
    const navListElement = `<li class='menu__link' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`
    navBarList.insertAdjacentHTML('beforeend', navListElement)
});

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar__menu',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });


});
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const navListElement = document.querySelector(
                `.menu__link[data-link='${entry.target.id}']`,
            )
            const section = document.getElementById(entry.target.id)

            if (entry && entry.isIntersecting) {
                navListElement.classList.add('active')
                section.classList.add('active')
            } else {
                if (navListElement.classList.contains('active')) {
                    navListElement.classList.remove('active')
                }

                if (section.classList.contains('active')) {
                    section.classList.remove('active')
                }
            }
        });
    });

    // Track all sections that have an `id` applied
    navBarElements.forEach(el => {
        observer.observe(document.getElementById(el.id))
    });

});