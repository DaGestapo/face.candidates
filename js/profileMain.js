import {showPopUpMenu, hideHeader} from './popUpMenu.js';
import { popUps, popUpNotFromMenu } from './PopupElements.js';

import { elementsArrange, elemtntsActivation,
        elementsCounts } from './objects/objectsDivsProfile.js';
   

const BtnsSubscribe = document.querySelectorAll('.subscribe__btn');
const userActivate = document.querySelector('.user__activate');
const countBtn = document.querySelector('.user__count');

(() => {
    BtnsSubscribe.forEach( item => {
        item.addEventListener('click', () => {
            popUpNotFromMenu(elementsArrange.createElm, 'body', '.arrange--back', '.arrange', '.arrange');
        });
    });

    userActivate.addEventListener('click', () => {
        popUpNotFromMenu(elemtntsActivation.createElm, 'body', '.activate--btn', '.activate', '.activate');
    });

    countBtn.addEventListener('click', () => {
        popUpNotFromMenu(elementsCounts.createElm, 'body', '.count--btn', '.count', '.count');
    });
})();