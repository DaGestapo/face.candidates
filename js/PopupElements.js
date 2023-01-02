import * as utiles from './utiles.js';
import { showPopUpMenu } from './popUpMenu.js';

const body = document.querySelector('body');



export async function popUps(func, backg, NameCloseBtn, prevDiv, div) {

    changeBgColor(backg, '#8d8d8d');

    body.append( func() );
    if(NameCloseBtn != null) {

    let closeBtn = document.querySelectorAll(NameCloseBtn);
    closeBtn = closeBtn[closeBtn.length - 1];

    let promise = new Promise( resolve => {
        closeBtn.addEventListener('click', () => {
            utiles.showPrevPopUp(prevDiv);

            closePopup(null, div);
            let popUpElms = document.querySelectorAll('.popUpBlock');
            
            if( popUpElms.length == 0 ) {
                showPopUpMenu();
            }

            resolve();
        })
    });

    return await promise;
    } 

} 

export function popUpNotFromMenu(func, backg, NameCloseBtn, prevDiv, div) {
    changeBgColor(backg, '#8d8d8d');

    body.append( func() );
    
    let closeBtn = document.querySelectorAll(NameCloseBtn);
    if(NameCloseBtn == null) return;

    closeBtn = closeBtn[closeBtn.length - 1];

    closeBtn.addEventListener('click', () => {
  
        utiles.showPrevPopUp(prevDiv);
        closePopup(null, div);
        changeBgColor(backg, '#fff');
      
    });

    } 


function changeBgColor( bgClass, color ) {

    let a;
    if(bgClass) {
        a = document.querySelector(bgClass);
        a.style.backgroundColor = color;
    }
}

export function closePopup(body, divName) {
    let div = document.querySelector(divName);
    div.remove();

    if( body != null ) {
        try {
            body.style.backgroundColor = '#fff';
        } catch {
            document.querySelector(body).style.backgroundColor = '#fff';
        }
        
    } 
}

