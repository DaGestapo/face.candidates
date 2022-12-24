// utiles
import * as utiles from './utiles.js';

// import functions
import {slider} from './slider.js';
import {showPopUpMenu, hideHeader} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, popUpNotFromMenu } from './PopupElements.js';

// Object PopUps
import { elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks, elementsRegistration, 
    elementCompleteReg, elementSubcription } from './objectsDiv.js';
    
// HTML elements    
const menu = document.querySelectorAll('.sticky__header--menu');
const header = document.querySelector('.sticky__header');
const regBtn = document.querySelector('.popUpMenu__reg--btn');
const body = document.querySelector('body');

// Exit butonn for popUp elements
let exitBtn = '.popUpBlock__exit__block';
let closeMenu = false;


//Main function
(() => {

    //Sliders
    slider();
    peopelSlider();

    // PopUp follow div
    elementsFollow.openBtn.addEventListener('click', () => {
        popUpNotFromMenu(elementsFollow.createElm, 'body', '.popUp__Follow--btn', '.popUp__Follow', '.popUp__Follow');
    });

    // Close All popUps elements by typing on other HTML elements
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


    //Registration button, open reg popUp
    regBtn.addEventListener('click', () => {
        showPopUpMenu();
        hideHeader(true);
        let hiddenDiv = [];
        let prevElm = addToArray(elementsRegistration.divName.split(' ')[0], hiddenDiv);
        
        showPopUpMenu();
        openRegistrationWayPopUps(prevElm, hiddenDiv);
    });

    // Open enter popUp div
    elemetsEnters.openBtn.addEventListener( 'click', () => {

        // "Forgot Password" way popUps
        openEnterPopUp().then( () => {
            let forgPasswordWayBtn = document.querySelector('.enter__forgot');
        
            let hiddenDiv = new Set();

            forgPasswordWayBtn.addEventListener('click', () => {
                    
                let prevElm = addPopUpToHTML(elemetsEnters, hiddenDiv);
                popUps(elementsForgotPassword.createElm, null, '.forgot__password--back', prevElm, '.forgot__password');
            
                let forgPasswordArr = ['.forgot__password', '.recovery__password'];
                let pairsOfObjectsForgWAY = [[elementsThanks, elementsForgotPassword]];
                loopThroughtPopup(forgPasswordArr, pairsOfObjectsForgWAY, hiddenDiv);
                  
              
            });
            
            // Registration way popUp
            let regWayArr = ['.enter', '.registration', '.registration__compl', '.subscription'];
            let pairsOfObjectsRegWay = [[elementsRegistration, elemetsEnters], 
                [elementCompleteReg, elementsRegistration], [elementSubcription, elementCompleteReg]];
            loopThroughtPopup(regWayArr, pairsOfObjectsRegWay, hiddenDiv);
                
          
        }); 


    });
    
    // Open menu

})();


async function openAndCloseMenu() {
    menu.forEach( (item, index) => {
        item.addEventListener('click', () => {
            showPopUpMenu();

            if( index == 0 ) closeMenu = true;
            else closeMenu = false;
        });
    });
 }


async function loopThroughtPopup(arr, arrObj, hiddenDiv) {
    
    let prevElm;

    for( let i = 0; i < arr.length; i++ ) {
        let btn = document.querySelector(arr[i] + '--btn');
        let promise = new Promise( (resolve, reject) => {
            btn.addEventListener('click', () => {
                try {
                    console.log('GG');
                     prevElm = addPopUpToHTML(arrObj[i][1], hiddenDiv);
                    let saveStr = `.${arrObj[i][0].divName.split(' ')[0]}`;
                    let addStr = `.${arrObj[i][1].divName.split(' ')[0]}`;
                    popUps(arrObj[i][0].createElm, null, null, addStr, saveStr);

                    resolve();
                 } catch {
                    reject( new Error() );
                 }
            });
        }).catch( () => {
             prevElm = addToArray(arr[i], hiddenDiv);
                
             showPopUpMenu();
            
             utiles.delDiv( hiddenDiv, '.popUpMenu' );
             hiddenDiv.clear();
         });

        await promise;
    }
}


function addPopUpToHTML(objToSave, arr) {
    let result = addToArray(objToSave.divName.split(' ')[0], arr);
    utiles.hidePrevPopUp(result);

    return result;
  
}



// Add to array function
function addToArray(elmClass, arr) {
    if(elmClass.includes('.')) {
        arr.add(elmClass);

        return elmClass;
    } 

    let i = `.${elmClass}`;
    arr.add(i);

    return i;
}

// Open enter popUp
function openEnterPopUp() {
    document.querySelector('.popUpMenu').classList.remove('show');
    popUps(elemetsEnters.createElm, null, exitBtn, '.enter', '.enter' );
    return Promise.resolve();
 }

