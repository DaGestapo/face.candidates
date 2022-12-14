import * as utiles from './utiles.js';
import { selectCandidate, deleteSelectColorName } from './features/peopleSliderFeatures.js';

const  sliderButtons = [ document.querySelector('.slider__people--left'), 
document.querySelector('.slider__people--right') ]; 

const slide = document.querySelectorAll('.people__slider--item');

slide.forEach( (item, index) => {
    item.style.left = `${index * 100}%`;
});

let count = 0;

export function peopelSlider() {
    sliderButtons.forEach( ( item, index ) => {

        utiles.checkerForArrow(sliderButtons, count, 4);
        
        item.addEventListener('click', () => {

            if( index == 1 ) {
                count++;

                if(count > 2) count = 2;
                utiles.moveSlider(slide, count, 100);


            } else {
                count--;

                if(count < 0) count = 0;
                utiles.moveSlider(slide, count, 100);
            }

            utiles.checkerForArrow(sliderButtons, count, 2);
        });
    });
}

selectCandidate();

deleteSelectColorName(sliderButtons);
