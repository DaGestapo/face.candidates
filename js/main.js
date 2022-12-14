//import { test } from './utiles.js';

import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, elementsFollow, elemetsEnters } from './PopupElements.js';
import { forgotPasswordPopUp } from './features/popUpElementsFeatures.js';

const menu = document.querySelectorAll('.sticky__header--menu');

( async function() {
    slider();
    peopelSlider();

    elementsFollow.openBtn.addEventListener('click', () => {
        popUps(elementsFollow.createElm, '.popUp__Follow', 'body','.popUp__Follow--btn');
    });

    let check = true;
    menu.forEach( function (item) {

        item.addEventListener('click', function() {
            if(check) check = showPopUpMenu(check);
            else check = showPopUpMenu(check);
        });
    });

    elemetsEnters.openBtn.addEventListener( 'click', () => {
        openRegMenu().then( forgotPasswordPopUp );
    });
   



})();


async function openRegMenu() {
    popUps(elemetsEnters.createElm, '.enter', '.popUpMenu','.enter__exit__block');
    return Promise.resolve();
 }
