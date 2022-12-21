import {popUpLink, showLinks} from './features/menuFeatures.js';

const menu = document.querySelectorAll('.sticky__header--menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');

popUpLink();
showLinks();

export function showPopUpMenu() {

    popUpMenu.classList.toggle('show');
    console.log( Array.from(popUpMenu.classList));

     if( Array.from(popUpMenu.classList).includes('show') ) {
         body.style.backgroundColor = '#8d8d8d';

         hideHeader(true);
     } else {
         body.style.backgroundColor = '#fff';

         hideHeader(false);
     }
}

export function hidePopUpMenu() {
    popUpMenu.classList.remove('show');

     hideHeader(false);
}


export function hideHeader(bool) {
    const header = document.querySelector('.sticky__header');

    if(bool) {
        header.style.visibility = 'hidden';
    } else {
        header.style.visibility = 'visible';
    }
}