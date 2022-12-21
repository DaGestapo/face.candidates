import {popUpLink, showLinks} from './features/menuFeatures.js';

const menu = document.querySelectorAll('.sticky__header--menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');

popUpLink();
showLinks();

export function showPopUpMenu() {

    popUpMenu.classList.toggle('show');

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
        body.style.background = '#8d8d8d';
    } else {
        header.style.visibility = 'visible';
        body.style.background = '#fff';
    }
}