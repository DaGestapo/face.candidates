import * as utiles from './utiles.js';
import { popUpMenuNotAuto, popUpMenuNotConf } from './objects/objPopupMenu.js';
import { popUps, popUpNotFromMenu, closePopup } from './PopupElements.js';
import {popUpLink, showLinks} from './features/menuFeatures.js';
import { elementsFollow, elemetsEnters, 
    elementsForgotPassword, elementsThanks, elementsRegistration, 
    elementCompleteReg, elementSubcription } from './objects/objectsDivMain.js';


const menu = document.querySelector('.sticky__header--menu');
let popUpMenu;
const body = document.querySelector('body');


let closeMenu = false;
let checkEnter = true;

let exitBtn = '.popUpBlock__exit__block';
    

let regBtn;
let openBtn;

let showMore;
let mergeList;
let listItems;


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

export function popUpMenuCeator() {
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

 function openEnterPopUp() {
    document.querySelector('.popUpMenu').classList.remove('show');
    popUps(elemetsEnters.createElm, null, exitBtn, '.enter', '.enter' );
    return Promise.resolve();
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

function addToArray(elmClass, arr) {
    if(elmClass.includes('.')) {
        arr.add(elmClass);
        return elmClass;
    } 

    let i = `.${elmClass}`;
    arr.add(i);

    return i;
}