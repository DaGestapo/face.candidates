import * as utiles from './utiles.js';
import { showPopUpMenu } from './popUpMenu.js';

const body = document.querySelector('body');



export async function popUps(func, backg, NameCloseBtn, prevDiv, div) {
    let closeBtn;

    changeBgColor(backg, '#8d8d8d');

    body.append( func() );

    if(NameCloseBtn != null) {
        console.log(prevDiv, div, NameCloseBtn);
        closeBtn = document.querySelector(NameCloseBtn);
        closeBtn.addEventListener('click', () => {
            console.log(prevDiv, div, NameCloseBtn);
            utiles.showPrevPopUp(prevDiv);
            closePopup(null, div);
            showPopUpMenu(false);

        });
    } 
} 

function changeBgColor( bgClass, color ) {
    console.log(bgClass);

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

