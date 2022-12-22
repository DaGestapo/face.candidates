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
        let forgPasswordWayBtn;
        let regWayBtn;

        // "Forgot Password" way popUps
        openEnterPopUp().then( () => {
            forgPasswordWayBtn = document.querySelector('.enter__forgot');
            regWayBtn = document.querySelector('.enter--btn');
        
                let hiddenDiv = [];
                let prevElm;

                forgPasswordWayBtn.addEventListener('click', () => {
                    
                prevElm = addToArray(elemetsEnters.divName.split(' ')[0], hiddenDiv);
                utiles.hidePrevPopUp(prevElm);
                popUps(elementsForgotPassword.createElm, null, '.forgot__password--back', prevElm, '.forgot__password');
            
                forgPasswordWayBtn = document.querySelector('.forgot__password--btn');
                forgPasswordWayBtn.addEventListener('click', () => {

                    prevElm = addPopUpToHTML(elementsThanks, elementsForgotPassword, hiddenDiv, prevElm, null)
                    
                    forgPasswordWayBtn = document.querySelector('.recovery__password--btn');
                    forgPasswordWayBtn.addEventListener('click', () => {
        
                        prevElm = addToArray(elementsThanks.divName.split(' ')[0], hiddenDiv);
                        
                        showPopUpMenu();
                        
                        utiles.delDiv( hiddenDiv, '.popUpMenu' );
                        hiddenDiv = [];
                    });
                });
            });
            
            // Registration way popUp
            
            openRegistrationWayPopUps(hiddenDiv);
                
          
        }); 


    });
    
    // Open menu
    async function openAndCloseMenu() {
        menu.forEach( (item, index) => {
            item.addEventListener('click', () => {
                showPopUpMenu();

                if( index == 0 ) closeMenu = true;
                else closeMenu = false;
            });
        });
     }

})();


function openRegistrationWayPopUps( hiddenDiv) {

    let regWayBtn;
    let prevElm ='.enter';
    let regWayArr = ['.enter', '.registration', '.registration__compl', '.subscription'];
    let pairsOfObjects = [[elementsRegistration, elemetsEnters], [elementCompleteReg, elementsRegistration], [elementSubcription, elementCompleteReg]];

    loopThroughtPopup(regWayArr, pairsOfObjects, prevElm, hiddenDiv);
 
}

async function loopThroughtPopup(arr,arrObj , prevElm, hiddenDiv) {

    for( let i = 0; i < arr.length; i++ ) {

        let btn = document.querySelector(arr[i] + '--btn');
        
        let promise = new Promise( (resolve, reject) => {
            btn.addEventListener('click', () => {
                try {
                    prevElm = addPopUpToHTML(arrObj[i][0], arrObj[i][1], hiddenDiv, prevElm, arr[i]);
                    resolve();
                } catch {
                    reject( new Error( 'undefine error' ));
                }
            });
        }).catch( () => {
            prevElm = addToArray(elementSubcription.divName.split(' ')[0], hiddenDiv);
                
            showPopUpMenu();
            
            utiles.delDiv( hiddenDiv, '.popUpMenu' );
            hiddenDiv = [];
            return;
        });

        await promise;
    }
}


function addPopUpToHTML(objToAdd, objToSave, arr, elm, divClass) {
    let result = addToArray(objToSave.divName.split(' ')[0], arr);

    utiles.hidePrevPopUp(result);
    console.log(elm);
    
    popUps(objToAdd.createElm, null, exitBtn, elm, divClass);

    return result;
}



// Add to array function
function addToArray(elmClass, arr) {
    let i = `.${elmClass}`;
    arr.push(i);

    return i;
}

// Open enter popUp
function openEnterPopUp() {
    document.querySelector('.popUpMenu').classList.remove('show');
    popUps(elemetsEnters.createElm, null, exitBtn, '.enter', '.enter' );
    return Promise.resolve();
 }

