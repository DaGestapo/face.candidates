


export function moveSlider(arr, count, prec) {
    arr.forEach( slide => {
        slide.style.transform = `translateX( -${count * prec}%)`;
    }); 
}