import * as utiles from './utiles.js';
//hidePrevPopUp showPrevPopUp

import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, elementsFollow, elemetsEnters, elementsForgotPassword } from './PopupElements.js';


const menu = document.querySelectorAll('.sticky__header--menu');

(() => {
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
        openRegMenu().then( () => {
            let forgotPasswordBtn = document.querySelector('.enter__forgot');

            forgotPasswordBtn.addEventListener('click', () => {

                let prevElm = '.' + elemetsEnters.divName;
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsForgotPassword.createElm, '.forgot__password', 'body', '.forgot__password--back', prevElm);
            });
        });
    });



})();



async function openRegMenu() {
    popUps(elemetsEnters.createElm, '.enter', '.popUpMenu','.enter__exit__block');
    return Promise.resolve();
 }
