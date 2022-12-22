import * as utiles from './utiles.js';

import {slider} from './slider.js';
import {showPopUpMenu, hideHeader} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, popUpNotFromMenu } from './PopupElements.js';
import { elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks, elementsRegistration, 
    elementCompleteReg } from './objectsDiv.js';
    
const menu = document.querySelectorAll('.sticky__header--menu');
const header = document.querySelector('.sticky__header');
const regBtn = document.querySelector('.popUpMenu__reg--btn');
const body = document.querySelector('body');

let exitBtn = '.popUpBlock__exit__block';
let closeMenu = false;

(() => {
    slider();
    peopelSlider();


    elementsFollow.openBtn.addEventListener('click', () => {
        popUpNotFromMenu(elementsFollow.createElm, 'body', '.popUp__Follow--btn', '.popUp__Follow', '.popUp__Follow');
    });


    closePopup().then( () => {
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


    regBtn.addEventListener('click', () => {
        showPopUpMenu();
        hideHeader(true);
        popUps(elementsRegistration.createElm, null, exitBtn, '.registration', '.registration');
        let button = document.querySelector('.registration__reg');
        button.addEventListener('click', () => {
            showPopUpMenu();

            utiles.delDiv( ['.registration'], '.popUpMenu' );
       
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
                        
                        showPopUpMenu();
                        
                        utiles.delDiv( hiddenDiv, '.popUpMenu' );
                        hiddenDiv = [];
                    });
                });
            });
            
            regWayBtn.addEventListener('click', () => {
        
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsRegistration.createElm, null, exitBtn, prevElm, '.registration');
            
                regWayBtn = document.querySelector('.registration__reg');
                regWayBtn.addEventListener('click', () => {
        
                    prevElm = addToArray(elementsRegistration.divName.split(' ')[0], hiddenDiv);
                    utiles.hidePrevPopUp(prevElm);
                    popUps(elementCompleteReg.createElm, null, exitBtn, prevElm, '.registration__compl');

                    regWayBtn = document.querySelector('.registration__compl--btn');
                    regWayBtn.addEventListener('click', () => {
                        
                        prevElm = addToArray(elementCompleteReg.divName.split(' ')[0], hiddenDiv);
                        
                    });
                });
            });
        }); 


    });
    

    async function closePopup() {
        menu.forEach( (item, index) => {
            item.addEventListener('click', () => {
                showPopUpMenu();

                if( index == 0 ) closeMenu = true;
                else closeMenu = false;
            });
        });
     }

})();


function addToArray(elmClass, arr) {
    let i = `.${elmClass}`;
    arr.push(i);

    return i;
}


function openRegMenu() {
    document.querySelector('.popUpMenu').classList.remove('show');
    popUps(elemetsEnters.createElm, null, exitBtn, '.enter', '.enter' );
    return Promise.resolve();
 }

