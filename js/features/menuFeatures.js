const showMore = document.querySelector('.show--more');
const mergeList = document.querySelector('.popUpMenu__mergeList');

const listItems = document.querySelectorAll('.head-item');


let listLinks = {
    markets: ['Интернет-маркетинг', 'Контент-маркетинг', 'Первофманс-маркетинг', 'PR'],
    backeEnd: ['text', 'text'],
    disign: ['text', 'text', 'text', 'text'],
    manage: []
}

export function popUpLink() {
    let check = true;

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

export async function showLinks() {
    let subList; 
    let checkForMainList = 0;
    let checkForSubList = true;
    let savePreviousList = null;

    listItems.forEach( item => {

        item.addEventListener('click', () => {

            if(checkForMainList == 0) {
                addSelectItem(item, 'select--item');
            
                addSubList(listLinks, item);

                savePreviousList = item.id;

                subList = document.querySelectorAll('.subList');
                
                subList.forEach( ite => {
                    ite.addEventListener('click', () => {
                        addSelectItem(ite, 'select--item');                 
                    });
                });

                if(checkForMainList == 1) checkForMainList = -1;

                checkForMainList = 1;
                
            } else if (checkForMainList == -1) {
                deleteItemInsideList( savePreviousList );
            }
            
            else {
                selectItemList(listItems, 'head-item select--item', 'head-item');
                addSelectItem(item, 'select--item');

                addSubList(listLinks, item);
                
                deleteItemInsideList( savePreviousList );

                checkForMainList = 0;
            }
        });
    });
    
}


function addSubList(list, item) {
    let result = '';

    if(item.id in list) {  

        for(let prop of list[item.id]) {
            result += `<li class="head-item subList"><a href="#">${prop}</a></li>`
        }
        document.querySelector(`.${item.id}`).innerHTML = result;
    }
}

function selectItemList(list, select, change) {
    for(let prop of list) {
        if( prop.classList == select ) {
            prop.className = change;
        }
    }
}

function addSelectItem(item, className) {
    item.classList.add(className);
}

function deleteItemInsideList(className) {
    let name = '.' + className;

    document.querySelector(name).innerHTML = '';
}