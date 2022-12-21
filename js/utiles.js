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

export function delDiv(arr, back) {
    console.log(arr);
    if(arr != null) {
        for(let i of arr) {
            try {
                document.querySelector(i).remove();
            } catch {
                i.remove();
            }
            
        }
    } 
    let body = document.querySelector(back);
    body.style.backgroundColor = '#fff';
}