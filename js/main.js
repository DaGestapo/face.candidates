import * as utiles from './utiles.js';
//hidePrevPopUp showPrevPopUp

import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, elementsFollow, elemetsEnters, elementsForgotPassword, elementsThanks } from './PopupElements.js';


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
            let openBtn = document.querySelector('.enter__forgot');

            openBtn.addEventListener('click', () => {

                let prevElm = '.' + elemetsEnters.divName;
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsForgotPassword.createElm, '.forgot__password', null, '.forgot__password--back', prevElm);
            
                openBtn = document.querySelector('.forgot__password--change');
                openBtn.addEventListener('click', () => {
                    prevElm = '.' + elementsForgotPassword.divName;

                    utiles.hidePrevPopUp(prevElm);
                    popUps(elementsThanks.createElm, '.recovery__password', null, '.recovery__password--btn', prevElm);
                });
            });
        });
    });



})();



async function openRegMenu() {
    popUps(elemetsEnters.createElm, '.enter', '.popUpMenu','.enter__exit__block');
    return Promise.resolve();
 }
