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
            mergeList.style.height = 'auto';
            showMore.innerHTML = 'Скрыть <span><i class="bi bi-caret-up"></i></span>';   
            
            check = false;
        } else {
            mergeList.style.height = '10vh';
            showMore.innerHTML = 'Еще <span><i class="bi bi-caret-down"></i></span></span>';   
            
            check = true;
        }

        
    });
}

export function showLinks() {
    let subList; 
    let checkForMainList = true;
    let savePreviousList = null;

    listItems.forEach( item => {

        item.addEventListener('click', () => {

            if(checkForMainList) {

                deleteItemInsideList( savePreviousList );
                savePreviousList = item.id;
            

                subList = document.querySelectorAll('.subList');
                
                subList.forEach( ite => {
                    ite.addEventListener('click', () => {
                        addSelectItem(ite, 'select--item');                 
                    });
                });

                selectItemList(listItems, 'head-item select--item', 'head-item');
                addSelectItem(item, 'select--item');


                if(!savePreviousList || listLinks[item.id].length == 0) {
                    checkForMainList = true;
                } else {
                    addSubList(listLinks, item);
                    checkForMainList = false;
                }
                
                
            } 
            
            else {
                selectItemList(listItems, 'head-item select--item', 'head-item');
                addSelectItem(item, 'select--item');
                addSubList(listLinks, item);
                deleteItemInsideList( savePreviousList );

                savePreviousList = item.id;

                checkForMainList = true;
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
    if ( className == null || className == '') return;

    let name = '.' + className;

    document.querySelector(name).innerHTML = '';
}