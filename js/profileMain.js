import {showPopUpMenu, hideHeader, createPopUpMenu, closePopUpBtnEvent} from './popUpMenu.js';
import { popUps, popUpNotFromMenu } from './PopupElements.js';
import {popUpLink, showLinks} from './features/menuFeatures.js';

import { elementsArrange, elemtntsActivation,
        elementsCounts } from './objects/objectsDivsProfile.js';
   

const BtnsSubscribe = document.querySelectorAll('.subscribe__btn');
const userActivate = document.querySelector('.user__activate');
const countBtn = document.querySelector('.user__count');

(() => {
    createPopUpMenu(true);

    let showMore = document.querySelector('.show--more');
    let mergeList = document.querySelector('.popUpMenu__mergeList');
    let listItems = document.querySelectorAll('.head-item');

    popUpLink(showMore, mergeList);
    showLinks(listItems);

    document.querySelector('.popUpMenu__backToReg').href = './index.html';



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