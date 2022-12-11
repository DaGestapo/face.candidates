import { moveSlider } from './utiles.js';

let slideRow = document.querySelectorAll('.row');
let arrowsForSlider = [document.querySelector('.slider__links--left'), 
document.querySelector('.slider__links--right')];
let counter = 0;


export function slider() {

    slideRow.forEach( (slide, index) => {
        slide.style.left = `${index * 0}%`;
    });

    arrowsForSlider.forEach( (slide, index) => {

        if(index == 1) {
            slide.addEventListener('click', () => {
                counter++;
                if( counter > 4.4 ) counter = 4.4;

                if( counter == 4 ) counter = 4.4;
                moveSlider(slideRow, counter, 25);
            });
        } else {
            slide.addEventListener('click', () => {
                counter--;
                if(counter <= 0) counter = 0;
                moveSlider(slideRow, counter, 25);
            });
        }
       
    })

}

