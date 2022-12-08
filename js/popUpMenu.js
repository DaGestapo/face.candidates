const menu = document.querySelectorAll('.menu');
const popUpMenu = document.querySelector('.popUpMenu');
const body = document.querySelector('body');

let check = true;

export function showPopUpMenu() {

    menu.forEach( item => {
        item.addEventListener('click', () => {

            if(check) {
                popUpMenu.classList.add('show');
                body.style.backgroundColor = '#8d8d8d';
    
                check = false;
            } else {
                popUpMenu.classList.remove('show');
                body.style.backgroundColor = '#fff';
    
                check = true;
            }
        });
        
    });

       
}