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
    showFullList();
    
}


export function showLinks() {
    let subLink; 

    let checkForMainList = true;
    let checkForSubList = true;

    let savePreviousList = null;

    listItems.forEach( item => {

        item.addEventListener('click', () => {

            if(checkForMainList) {

                deleteItemInsideList( savePreviousList );
                savePreviousList = item.id;
            

                if(!savePreviousList || listLinks[item.id].length == 0) {
                    selectItemList(listItems, 'head-item select--item', 'head-item');
                    addSelectItem(item, 'select--item');

                    checkForMainList = true;
                } else {
                    selectItemList(listItems, 'head-item select--item', 'head-item');
                    addSelectItem(item, 'select--item');
                    addSubList(listLinks, item);

                    subLink = document.querySelectorAll('.subLink');

                
                    subLink.forEach( ite => {
                        ite.addEventListener('click', () => {

                            if(checkForSubList) {
                                selectItemList(subLink, 'subLink select--item', 'subLink');
                                addSelectItem(ite, 'select--item'); 

                                checkForSubList = false;
                            } else  {
                               selectItemList(subLink, 'subLink select--item', 'subLink');
                               addSelectItem(ite, 'select--item'); 

                               checkForSubList = true;
                            }
                           
                        });
                    });
    

                    checkForMainList = false;
                }
                
                
            } 
            
            else {
                if (savePreviousList == item.id) {
                    selectItemList(listItems, 'head-item select--item', 'head-item');
                    deleteItemInsideList( savePreviousList );
                } else {
                    selectItemList(listItems, 'head-item select--item', 'head-item');
                    addSelectItem(item, 'select--item');
                    addSubList(listLinks, item);
                    deleteItemInsideList( savePreviousList );
                }

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
            result += `<li class="head-item subList"><a href="#" class="subLink">${prop}</a></li>`
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

function showFullList() {
    let check = true;

    showMore.addEventListener('click', () => {
        
        if(check) {
            mergeList.style.height = 'auto';
            showMore.innerHTML = 'Скрыть <span><i class="bi bi-caret-up"></i></span>';   
            
            check = false;
        } else {
            mergeList.style.height = '6rem';
            showMore.innerHTML = 'Еще <span><i class="bi bi-caret-down"></i></span></span>';   
            
            check = true;
        }

        
    });
}