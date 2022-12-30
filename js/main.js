// utiles
import * as utiles from './utiles.js';

// import functions
import {slider} from './slider.js';
import {showPopUpMenu, hideHeader, createPopUpMenu, closePopUpBtnEvent} from './popUpMenu.js';
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


function popUpMenuCeator() {
    if(checkEnter) {
        regPopUpMenu();

        checkEnter = false;

    } else {
        createPopUpMenu(true);
        closePopUpBtnEvent();

        showMore = document.querySelector('.show--more');
        mergeList = document.querySelector('.popUpMenu__mergeList');
        listItems = document.querySelectorAll('.head-item');

        popUpLink(showMore, mergeList);
        showLinks(listItems);

        let backToReg = document.querySelector('.popUpMenu__backToReg');
        backToReg.addEventListener('click', () => {
            document.querySelector('.popUpMenu').remove();

            popUpMenuCeator();
            showPopUpMenu();
            closePopUpBtnEvent()
            
        });

        checkEnter = true;
    }
}

async function loopThroughtPopup(arr, arrObj, hiddenDiv) {
    
    let prevElm;

    for( let i = 0; i < arr.length; i++ ) {
        let btn = document.querySelector(arr[i] + '--btn');
        let promise = new Promise( (resolve, reject) => {
            btn.addEventListener('click', () => {
                try {
                    prevElm = addPopUpToHTML(arrObj[i][1], hiddenDiv);
                    let saveStr = `.${arrObj[i][0].divName.split(' ')[0]}`;
                    let addStr = `.${arrObj[i][1].divName.split(' ')[0]}`;
                    popUps(arrObj[i][0].createElm, null, null, addStr, saveStr);

                    resolve();
                 } catch {
                    reject( new Error() );
                 }
            });
        })
        .catch( () => {
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


function regPopUpMenu(){
    createPopUpMenu(false);

    regBtn = document.querySelector('.popUpMenu__reg--btn');
    openBtn = document.querySelector('.popUpMenu__open--btn');

    showMore = document.querySelector('.show--more');
    mergeList = document.querySelector('.popUpMenu__mergeList');
    listItems = document.querySelectorAll('.head-item');

    popUpLink(showMore, mergeList);
    showLinks(listItems);

    regBtn.addEventListener('click', () => {
        showPopUpMenu();
        hideHeader(true);
        
        let hiddenDiv = new Set();
        popUps(elementsRegistration.createElm);
        
        let regWayArr = ['.registration', '.registration__compl', '.subscription'];
        let pairsOfObjectsRegWay = [[elementCompleteReg, elementsRegistration], [elementSubcription, elementCompleteReg]];
        loopThroughtPopup(regWayArr, pairsOfObjectsRegWay, hiddenDiv);
    });

    openBtn.addEventListener( 'click', () => {

        openEnterPopUp().then( () => {
            let forgPasswordWayBtn = document.querySelector('.enter__forgot');
            let hiddenDiv = new Set();

            // "Forgot Password" way popUps
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
                
            let enterBtn = document.querySelector('.enter__enter--btn');
            enterBtn.addEventListener('click', () => {
                document.querySelector('.popUpMenu').remove();
                popUpMenuCeator();
                addToArray(regWayArr[0], hiddenDiv);
                showPopUpMenu();
                
                utiles.delDiv( hiddenDiv, '.popUpMenu' );
                hiddenDiv.clear();
            });
        }); 

    });

 }