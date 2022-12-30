import * as utiles from './utiles.js';
import { popUpMenuNotAuto, popUpMenuNotConf } from './objects/objPopupMenu.js';

const menu = document.querySelector('.sticky__header--menu');
let popUpMenu;
const body = document.querySelector('body');


let closeMenu = false;
let checkEnter = false;


export function createPopUpMenu(bool){
    let menuPop;

    if(!bool) {
        menuPop = popUpMenuNotAuto.createElm();
        body.append( menuPop );

        checkEnter = true;
    } else {
        menuPop = popUpMenuNotConf.createElm();
        body.append( menuPop );

        checkEnter = false;
    }

    popUpMenu = document.querySelector('.popUpMenu');
}

export function showPopUpMenu() {
    let result = popUpMenu.classList.toggle('show');

     if( Array.from(popUpMenu.classList).includes('show') ) {
         body.style.backgroundColor = '#8d8d8d';

         hideHeader(true);
     } else {
         body.style.backgroundColor = '#fff';

         hideHeader(false);
     }
     return result;
}

export function hidePopUpMenu() {
    popUpMenu.classList.remove('show');

     hideHeader(false);
}


export function hideHeader(bool) {
    const header = document.querySelector('.sticky__header');

    if(bool) {
        header.style.visibility = 'hidden';
        body.style.background = '#8d8d8d';
    } else {
        header.style.visibility = 'visible';
        body.style.background = '#fff';
    }
}


openAndCloseMenu().then( () => {
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


export async function openAndCloseMenu() {
    let promise = new Promise( resolve => {
        
        menu.addEventListener('click', () => {
            showPopUpMenu();
        
            closeMenu = true; 
            
            resolve();
        
        
        });
    });

    await promise;
    closePopUpBtnEvent();

}

export function closePopUpBtnEvent() {
    let closeBtn = document.querySelector('.popUpMenu--menu');
    closeBtn.addEventListener('click', () => {
            showPopUpMenu();

            closeMenu = false;
    });
}