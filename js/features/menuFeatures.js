const showMore = document.querySelector('.show--more');
const mergeList = document.querySelector('.popUpMenu__mergeList');

let check = true;

export function features() {

    showMore.addEventListener('click', () => {
        
        if(check) {
            mergeList.style.height = '10vh';
            showMore.innerHTML = 'Скрыть <span><i class="bi bi-caret-up"></i></span>';   
            
            check = false;
        } else {
            mergeList.style.height = '5vh';
            showMore.innerHTML = 'Еще <span><i class="bi bi-caret-down"></i></span></span>';   
            
            check = true;
        }

        
    });
}
