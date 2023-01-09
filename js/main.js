// utiles
import * as utiles from './utiles.js';

// import functions
import {slider} from './slider.js';
import {popUpMenuCeator} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, popUpNotFromMenu } from './PopupElements.js';

// Object PopUps
import { elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks, elementsRegistration, 
    elementCompleteReg, elementSubcription } from './objects/objectsDivMain.js';
    
import { popUpMenuNotAuto } from './objects/objPopupMenu.js';
import {popUpLink, showLinks} from './features/menuFeatures.js';

// HTML elements    
const menu = document.querySelectorAll('.sticky__header--menu');
const body = document.querySelector('body');

let regBtn;
let openBtn;

let showMore;
let mergeList;
let listItems;

// Exit butonn for popUp elements
let exitBtn = '.popUpBlock__exit__block';

let checkEnter = true;


//Main function
(() => {
    //Sliders
    slider();
    peopelSlider();

    // PopUp follow div
    elementsFollow.openBtn.addEventListener('click', () => {
        popUpNotFromMenu(elementsFollow.createElm, 'body', '.popUp__Follow--btn', '.popUp__Follow', '.popUp__Follow');
    });

    popUpMenuCeator();

})();

