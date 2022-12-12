const buttonFollow = document.querySelector('.follow__section--btn');
const body = document.querySelector('body');


export async function popUpFollow() {
    let div = createPopUpElement();
    let closeBtn;

    buttonFollow.addEventListener('click', () => {
        div = createPopUpElement();

        body.append(div);
        body.style.backgroundColor = '#8d8d8d';
        closeBtn = document.querySelector('.popUp__Follow--btn');


        closeBtn.addEventListener('click', () => {
            
            div.remove();
            body.style.backgroundColor = '#fff';

        });
    });

}


function createPopUpElement() {
        let div = document.createElement('div');
        div.setAttribute('class', 'popUp__Follow');

        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');

        let btn = document.createElement('button');
        btn.setAttribute('class', 'popUp__Follow--btn');

        let img = document.createElement('img');
        img.setAttribute('src', './img/logo.png');

        btn.innerHTML = `Закрыть`;

        h1.innerHTML = `ЛИЦА <span><img src="./img/logo.png" alt=""></span> Кандидаты`;
        let textH2 = document.createTextNode('Спасибо! Вы подписались на еженедельные обновления базы проверенных кандидатов.');

        h2.append(textH2);
        div.append(h1, h2, btn);

        return div;
}


