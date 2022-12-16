import * as utiles from './utiles.js';

import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks, elementsRegistration } from './PopupElements.js';

    
const menu = document.querySelectorAll('.sticky__header--menu');


(() => {
    slider();
    peopelSlider();


    elementsFollow.openBtn.addEventListener('click', () => {
        popUps(elementsFollow.createElm, 'body', '.popUp__Follow--btn', '.popUp__Follow');

        let closeBtn = document.querySelector('.popUp__Follow--btn');
        closeBtn.addEventListener('click', () => {
            utiles.delDiv( ['.popUp__Follow'], 'body' );
        });
    });


    let check = true;
    menu.forEach( function (item) {

        item.addEventListener('click', () => {
            if(check) check = showPopUpMenu(check);
            else check = showPopUpMenu(check);
        });
    });


    elemetsEnters.openBtn.addEventListener( 'click', () => {
        let forgPasswordWayBtn;
        let regWayBtn;

        openRegMenu().then( () => {
            forgPasswordWayBtn = document.querySelector('.enter__forgot');
            regWayBtn = document.querySelector('.enter__reg--btn');
        
                let hiddenDiv = [];
                let prevElm = addToArray(elemetsEnters.divName, hiddenDiv);
        
                forgPasswordWayBtn.addEventListener('click', () => {
        
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsForgotPassword.createElm, null, '.forgot__password--back', prevElm, '.forgot__password');
            
                forgPasswordWayBtn = document.querySelector('.forgot__password--change');
                forgPasswordWayBtn.addEventListener('click', () => {
        
                    prevElm = addToArray(elementsForgotPassword.divName, hiddenDiv);
                    utiles.hidePrevPopUp(prevElm);
                    popUps(elementsThanks.createElm, null, null);
                    
                    forgPasswordWayBtn = document.querySelector('.recovery__password--btn');
                    forgPasswordWayBtn.addEventListener('click', () => {
        
                        prevElm = addToArray(elementsThanks.divName, hiddenDiv);
                        utiles.delDiv( hiddenDiv, '.popUpMenu' );
                        hiddenDiv = [];
                    });
                });
            });
            
            regWayBtn.addEventListener('click', () => {
        
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsRegistration.createElm, null, '.registration__exit__block', hiddenDiv);
            
                regWayBtn = document.querySelector('.registration__reg');
                regWayBtn.addEventListener('click', () => {
        
                    prevElm = addToArray(elementsRegistration.divName, hiddenDiv);
                    utiles.delDiv( hiddenDiv, '.popUpMenu' );
                    hiddenDiv = [];
                });
            });
        }); 
        }); 

})();

function addToArray(elmClass, arr) {
    let i = `.${elmClass}`;
    arr.push(i);

    return i;
}


async function openRegMenu(prevDiv) {
    popUps(elemetsEnters.createElm, null,'.enter__exit__block', '.enter', '.enter' );
    return Promise.resolve();
 }
