import * as utiles from './utiles.js';

import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps } from './PopupElements.js';
import { elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks, elementsRegistration, 
    elementCompleteReg } from './objectsDiv.js';
    
const menu = document.querySelectorAll('.sticky__header--menu');
const header = document.querySelector('.sticky__header');
const regBtn = document.querySelector('.popUpMenu__reg--btn');
const body = document.querySelector('body');

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

    regBtn.addEventListener('click', () => {
        document.querySelector('.popUpMenu').classList.remove('show');
        popUps(elementsRegistration.createElm, null, '.registration__exit__block', '.registration', '.registration');

        let button = document.querySelector('.registration__reg');
        button.addEventListener('click', () => {
            if(check) check = showPopUpMenu(check);
            else check = showPopUpMenu(check);

            utiles.delDiv( ['.registration'], '.popUpMenu' );
            check = true;
        });

    });


    elemetsEnters.openBtn.addEventListener( 'click', () => {
        let forgPasswordWayBtn;
        let regWayBtn;

        openRegMenu().then( () => {
            forgPasswordWayBtn = document.querySelector('.enter__forgot');
            regWayBtn = document.querySelector('.enter__reg--btn');
        
                let hiddenDiv = [];
                let prevElm = addToArray(elemetsEnters.divName.split(' ')[0], hiddenDiv);

                forgPasswordWayBtn.addEventListener('click', () => {
        
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsForgotPassword.createElm, null, '.forgot__password--back', prevElm, '.forgot__password');
            
                forgPasswordWayBtn = document.querySelector('.forgot__password--change');
                forgPasswordWayBtn.addEventListener('click', () => {
        
                    prevElm = addToArray(elementsForgotPassword.divName.split(' ')[0], hiddenDiv);
                    utiles.hidePrevPopUp(prevElm);
                    popUps(elementsThanks.createElm, null, null);
                    
                    forgPasswordWayBtn = document.querySelector('.recovery__password--btn');
                    forgPasswordWayBtn.addEventListener('click', () => {
        
                        prevElm = addToArray(elementsThanks.divName.split(' ')[0], hiddenDiv);
                        
                        if(check) check = showPopUpMenu(check);
                        else check = showPopUpMenu(check);
                        
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
        
                    prevElm = addToArray(elementsRegistration.divName.split(' ')[0], hiddenDiv);
                    utiles.hidePrevPopUp(prevElm);
                    popUps(elementCompleteReg.createElm, null, '.popUpBlock__exit__block', prevElm, '.registration__compl');

                    regWayBtn = document.querySelector('.registration__compl--btn');
                    regWayBtn.addEventListener('click', () => {
                        
                    });
                });
            });
        }); 
    });

})();


// utiles.delDiv( hiddenDiv, '.popUpMenu' );
// hiddenDiv = [];

function addToArray(elmClass, arr) {
    let i = `.${elmClass}`;
    arr.push(i);

    return i;
}


async function openRegMenu() {
    document.querySelector('.popUpMenu').classList.remove('show');
    popUps(elemetsEnters.createElm, null,'.popUpBlock__exit__block', '.enter', '.enter' );
    return Promise.resolve();
 }
