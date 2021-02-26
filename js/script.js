"use strict" 

document.addEventListener('DOMContentLoaded', () => {

const burger = document.querySelector('.burger'),
        menu = document.querySelector('.mobile_wrapper');

        burger.addEventListener('click', () => {
            menu.classList.toggle('visible_mobile');
            burger.classList.toggle('burger_active');
        });

});