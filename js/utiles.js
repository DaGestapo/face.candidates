


export function moveSlider(arr, count, prec) {
    arr.forEach( slide => {
        slide.style.transform = `translateX( -${count * prec}%)`;
    }); 
}

export function checkerForArrow(arr, count, upperBorder) {
    if( count == 0 ) {
        arr[0].style.visibility = "hidden";
    } else {
        arr[0].style.visibility = "visible";
    }

    if( count >= upperBorder ) {
        arr[1].style.visibility = "hidden";
    } else {

        arr[1].style.visibility = "visible";
    }
}
