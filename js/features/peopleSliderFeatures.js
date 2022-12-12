const buttons = document.querySelectorAll('.people__slider--item--btn');
const namesTxt = document.querySelectorAll('.people__slider--item--name');

let check = true;

export function selectCandidate() {

    buttons.forEach( (item, index) => {
        item.addEventListener('click', () => {
            if (check) {
                namesTxt[index].style.color = '#4338CA';
                check = false;
            } else {
                namesTxt[index].style.color = '#111827';
                check = true;
            }
            
        });
    });

} 

export function deleteSelectColorName(arr) {
    arr.forEach( item => {
        item.addEventListener('click', () => {
            check = true;

            for(let prop of namesTxt) {
                 if(prop.style.color === 'rgb(67, 56, 202)') {
                     prop.style.color = 'rgb(17, 24, 39)';
                 }
            }
        });
    });
}
