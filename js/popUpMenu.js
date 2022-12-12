import {popUpLink, showLinks} from './features/menuFeatures.js';

const menu = document.querySelectorAll('.menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');
const header = document.querySelector('.sticky__header');

popUpLink();
showLinks();

export function showPopUpMenu(bool) {

    let check = bool;
    let newCheck = true;
    console.log(check);

    if(check) {
        menu.forEach( (item) => {

            item.addEventListener('click', () => {
                if(newCheck) {
                    popUpMenu.classList.add('show');
                    body.style.backgroundColor = '#8d8d8d';
        
                    header.style.visibility = 'hidden';
                    newCheck = false;
                } else {
                    console.log(check);
                    popUpMenu.classList.remove('show');
                    body.style.backgroundColor = '#fff';

                    header.style.visibility = 'visible';
                    newCheck = true;
                }
            });
        })
    } else {
        popUpMenu.classList.remove('show');
        body.style.backgroundColor = '#fff';

        header.style.visibility = 'visible';
        check = true;
    }

}
