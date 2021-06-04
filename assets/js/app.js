/**
 * Project: Demo Project
 * Author: Tahsin Ahmed Tushar
 * Date: 02 June, 2021
 * Github: https://github.com/tushariar
 */

const navbar = document.querySelector('nav');
const navItems = navbar.querySelectorAll('ul li a');
const menuIcon = document.querySelector('#menuIcon');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navItems.forEach(navItem => {
    navItem.onclick = () => {
        navbar.classList.remove('active');
    };
});