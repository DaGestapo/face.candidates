import {showPopUpMenu, hideHeader, createPopUpMenu, closePopUpBtnEvent} from './popUpMenu.js';
import { popUps, popUpNotFromMenu, closePopup } from './PopupElements.js';
import {popUpLink, showLinks} from './features/menuFeatures.js';

import { elementsArrange, elemtntsActivation,
        elementsCounts, elementsCanceled } from './objects/objectsDivsProfile.js';
   

const BtnsSubscribe = document.querySelectorAll('.subscribe__btn');
let userActivate = document.querySelector('.user__activate');
let countBtn = document.querySelector('.user__count');

let checker = true;
let prevInterface;
let prevMenuProfile;

let activeFollow = {
    button: 'user__cancel',
    cardInfo: 'user__card',
    changeCard: 'user__change',

    changeElm() {
        let elm = document.querySelector('.user');
        let button = elm.querySelector('button');
        let p = elm.querySelector('p');
        let pre = document.createElement('pre');

        let h3 = elm.querySelector('h3');
        h3.innerHTML = '<span><div></div></span>Подписка активна до 10.10.2022'

        let div = h3.querySelector('div');
        div.style.backgroundColor = '#00C02A';

        button.className = this.button;
        button.innerHTML = 'Отменить';

        p.className = this.changeCard;
        p.innerHTML = 'Отвязать';

        pre.className = this.cardInfo;
        pre.innerHTML = 
`Привязанная карта:
**** **** **** 2930`;

        p.before(pre);
    }
};

(() => {
    createPopUpMenu(true);

    let showMore = document.querySelector('.show--more');
    let mergeList = document.querySelector('.popUpMenu__mergeList');
    let listItems = document.querySelectorAll('.head-item');

    popUpLink(showMore, mergeList);
    showLinks(listItems);

    document.querySelector('.popUpMenu__backToReg').href = './index.html';

    userActivate.addEventListener('click', forCicle);

    BtnsSubscribe.forEach( item => {
        item.addEventListener('click', () => {
            popUpNotFromMenu(elementsArrange.createElm, 'body', '.arrange--back', '.arrange', '.arrange');
        });
    });

    countBtn.addEventListener('click', ShowCount);

})();

function ShowCount() {
    if(checker) {
        popUpNotFromMenu(elementsCounts.createElm, 'body', '.count--btn', '.count', '.count');
    } else {

    }

    
}

function forCicle() {

    if(checker) {
        popUpNotFromMenu(elemtntsActivation.createElm, 'body', '.activate--btn', '.activate', '.activate');

        let btn = document.querySelector('.activate--btn');
        btn.addEventListener('click', () => {
            prevInterface = document.querySelector('.user').cloneNode(true);
            activeFollow.changeElm();

            let userMenuProfile = document.querySelector('.popUpMenu__profile').querySelector('h3');
            prevMenuProfile = userMenuProfile.cloneNode(true);

            userMenuProfile.innerHTML = '<span><div></div></span>Подписка активна';
            let div = userMenuProfile.querySelector('div');
            div.style.backgroundColor = '#00C02A';

            checker = false;
        });
    } else {
        popUpNotFromMenu(elementsCanceled.createElm, 'body', '.cancel--btn', '.cancel', '.cancel');

        let btn = document.querySelector('.cancel__cancel--btn');
        btn.addEventListener('click', () => {
            document.querySelector('.user').replaceWith(prevInterface);
            
            prevInterface = document.querySelector('.user').cloneNode(true);
            checker = true;
            userActivate = document.querySelector('.user__activate');
            userActivate.addEventListener('click', forCicle);

            countBtn = document.querySelector('.user__count');
            countBtn.addEventListener('click', ShowCount);

            document.querySelector('.popUpMenu__profile').querySelector('h3').replaceWith(prevMenuProfile); 
            
            prevMenuProfile = document.querySelector('.popUpMenu__profile').querySelector('h3').cloneNode(true);

            closePopup('body', '.cancel')
        });
    }
}