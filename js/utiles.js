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

export function hidePrevPopUp(divName) {
    let div = document.querySelector(divName);
    div.style.visibility = 'hidden';
}

export function showPrevPopUp(divName) {
    let div = document.querySelector(divName);
    div.style.visibility = 'visible';
}

export function delDiv(className, ...args) {
    if(args != null) {
        for(let i of args) {
            document.querySelector(i).remove();
        }
    } 
    if(className != null) {
        document.querySelector(className).remove();
    }
}