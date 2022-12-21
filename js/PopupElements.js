import * as utiles from './utiles.js';
import { showPopUpMenu } from './popUpMenu.js';

const body = document.querySelector('body');



export async function popUps(func, backg, NameCloseBtn, prevDiv, div) {

    changeBgColor(backg, '#8d8d8d');

    body.append( func() );
    if(NameCloseBtn != null) {

    let closeBtn = document.querySelectorAll(NameCloseBtn);
    closeBtn = closeBtn[closeBtn.length - 1];

    closeBtn.addEventListener('click', () => {
        
        utiles.showPrevPopUp(prevDiv);
        closePopup(null, div);
        if( document.querySelectorAll('.popUpBlock').length == 0 ) {
            showPopUpMenu();
        }
    });
    } 
} 

function changeBgColor( bgClass, color ) {

    let a;
    if(bgClass) {
        a = document.querySelector(bgClass);
        a.style.backgroundColor = color;
    }
}

function closePopup(body, divName) {
    let div = document.querySelector(divName);
    div.remove();

    if( body != null ) {
        body.style.backgroundColor = '#fff'; 
    } 
}

