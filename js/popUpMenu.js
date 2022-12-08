const menu = document.querySelector('.menu');
const popUpMenu = document.querySelector('.popUpMenu');
const mainIpt = document.querySelector('.search');

let check = true;

export function showPopUpMenu() {

    menu.addEventListener('click', () => {
        
        if(check) {
            popUpMenu.classList.add('show');
            mainIpt.classList.add('hide');

            check = false;
        } else {
            popUpMenu.classList.remove('show');
            mainIpt.classList.remove('hide');

            check = true;
        }
       
    });
}