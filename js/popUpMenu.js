import {popUpLink, showLinks} from './features/menuFeatures.js';

const menu = document.querySelectorAll('.menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');
const header = document.querySelector('.sticky__header');

let check = true;

popUpLink();
showLinks();

export function showPopUpMenu() {

    menu.forEach( item => {
        item.addEventListener('click', () => {

            if(check) {
                popUpMenu.classList.add('show');
                body.style.backgroundColor = '#8d8d8d';

                header.style.visibility = 'hidden';
                check = false;
            } else {
                popUpMenu.classList.remove('show');
                body.style.backgroundColor = '#fff';
    
                header.style.visibility = 'visible';
                check = true;
            }
        });
    }); 
}
