import {popUpMenuCeator} from './popUpMenu.js';


const showMoreBtn = document.querySelector('.list__filter--btn');
const gridBlock = document.querySelector('.list__candidates');
let checherShowMore = true;

( () => {
    popUpMenuCeator();

    showMoreBtn.addEventListener('click', () => {
        if(checherShowMore) {
            gridBlock.style.height = 'auto';
            checherShowMore = false;
        } else {
            gridBlock.style.height = '40rem';
            checherShowMore = true;
        }
    });
})();

