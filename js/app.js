'use strict';

const topHeader = document.querySelector('.mobile-nav');
const menu = document.querySelector('.mobile-menu');
const toggleBTn = document.querySelector('#toggle-menu');

toggleBTn.addEventListener('click', (e) => {
  e.preventDefault();

  topHeader.classList.toggle('background-color');
  menu.classList.toggle('show-menu');

});