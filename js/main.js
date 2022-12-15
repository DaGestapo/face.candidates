import * as utiles from './utiles.js';

import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks } from './PopupElements.js';

    
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
        let hiddenDiv = [];

        openRegMenu().then( () => {
            let openBtn = document.querySelector('.enter__forgot');
            openBtn.addEventListener('click', () => {
                
                let prevElm = '.' + elemetsEnters.divName;
                hiddenDiv.push(prevElm);

                utiles.hidePrevPopUp(prevElm);
                popUps(elementsForgotPassword.createElm, '.forgot__password', null, '.forgot__password--back', hiddenDiv);
            
                openBtn = document.querySelector('.forgot__password--change');
                openBtn.addEventListener('click', () => {
                    prevElm = '.' + elementsForgotPassword.divName;
                    hiddenDiv.push(prevElm);
                    
                    utiles.hidePrevPopUp(prevElm);
                    popUps(elementsThanks.createElm, '.recovery__password', '.popUpMenu', null, prevElm, '.recovery__password');
                    console.log(hiddenDiv);
                    utiles.delDiv(null, hiddenDiv);
                    hiddenDiv = [];
                });
            });
        }); 
    });





})();



async function openRegMenu() {
    popUps(elemetsEnters.createElm, '.enter', '.popUpMenu','.enter__exit__block');
    return Promise.resolve();
 }
