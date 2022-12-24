import * as utiles from './utiles.js';
import {popUpLink, showLinks} from './features/menuFeatures.js';

const menu = document.querySelectorAll('.sticky__header--menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');

popUpLink();
showLinks();

let closeMenu = false;

export function showPopUpMenu() {

    let result = popUpMenu.classList.toggle('show');

     if( Array.from(popUpMenu.classList).includes('show') ) {
         body.style.backgroundColor = '#8d8d8d';

         hideHeader(true);
     } else {
         body.style.backgroundColor = '#fff';

         hideHeader(false);
     }
     return result;
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


openAndCloseMenu().then( () => {
    let closePopUp = document.querySelectorAll('section');
    closePopUp.forEach( (item) => {

        item.addEventListener('click', () => {
            let popUps = document.querySelectorAll('.popUpBlock');
            if(closeMenu) {
                utiles.delDiv(popUps, 'body');
                
                closeMenu = showPopUpMenu();
            }
        });
    });
});


export async function openAndCloseMenu() {
    menu.forEach( (item, index) => {
        item.addEventListener('click', () => {
            showPopUpMenu();
            
            if( index == 0 ) closeMenu = true;
            else closeMenu = false;         
        });
    });
}