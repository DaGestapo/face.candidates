let slideRow = document.querySelectorAll('.row');

let arrowsForSlider = [document.querySelector('.bi-arrow-left'), document.querySelector('.bi-arrow-right')];

let counter = 0;

slider();

slideRow.forEach( (slide, index) => {
    slide.style.left = `${index * 0}%`;
});

function slider() {

    arrowsForSlider.forEach( (slide, index) => {
        console.log(counter);

        if(index == 1) {
            slide.addEventListener('click', () => {
                counter++;
                if(counter >= 2.5) counter = 2.5;
                moveSlider(counter);
            });
        } else {
            slide.addEventListener('click', () => {
                counter--;
                if(counter <= 0) counter = 0;
                moveSlider(counter);
            });
        }
       
    })

}

function moveSlider(count) {
    slideRow.forEach( slide => {
        slide.style.transform = `translateX( -${count * 40}%)`;
    }); 
}