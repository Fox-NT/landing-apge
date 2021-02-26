"use strict"

document.addEventListener('DOMContentLoaded', () => {

const burger = document.querySelector('.burger'),
        menu = document.querySelector('.mobile_wrapper'),
        body = document.querySelector('body'),
        list = document.querySelector('.nav_list'),
        lang = document.querySelector('.language_mobile');

        burger.addEventListener('click', () => {
            menu.classList.toggle('visible_mobile');
            burger.classList.toggle('burger_active');
            body.classList.toggle('over');
            list.classList.toggle('nav_list_active');
            lang.classList.toggle('lang_mobile_activ');
        });

});