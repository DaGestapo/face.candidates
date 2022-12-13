import {popUpLink, showLinks} from './features/menuFeatures.js';

const menu = document.querySelectorAll('.sticky__header--menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');

popUpLink();
showLinks();

export function showPopUpMenu(bool) {

    let check = bool;
    console.log(check);

    menu.forEach( (item) => {

        item.addEventListener('click', () => {
            if(check) {
                popUpMenu.classList.add('show');
                body.style.backgroundColor = '#8d8d8d';
    
                hideHeader(check);
                check = false;
            } else {
                popUpMenu.classList.remove('show');
                body.style.backgroundColor = '#fff';
        
                hideHeader(check);
                check = true;
            }
        });
    });

}

export function hideHeader(bool) {
    const header = document.querySelector('.sticky__header');

    if(bool) {
        header.style.visibility = 'hidden';
    } else {
        header.style.visibility = 'visible';
    }
}