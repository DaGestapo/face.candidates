import {showPopUpMenu} from './popUpMenu.js';

const body = document.querySelector('body');

export let elementsFollow = {
    openBtn: document.querySelector('.follow__section--btn'),
    classCloseBtn: 'popUp__Follow--btn',
    
    createElm() {
        let div = document.createElement('div');
        div.setAttribute('class', 'popUp__Follow');

        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');

        let btn = document.createElement('button');
        btn.setAttribute('class', elementsFollow.classCloseBtn);

        let img = document.createElement('img');
        img.setAttribute('src', './img/logo.png');

        btn.innerHTML = `Закрыть`;

        h1.innerHTML = `ЛИЦА <span><img src="./img/logo.png" alt=""></span> Кандидаты`;
        let textH2 = document.createTextNode('Спасибо! Вы подписались на еженедельные обновления базы проверенных кандидатов.');

        h2.append(textH2);
        div.append(h1, h2, btn);

        return div;
    }
}

export let elemetsEnters = {
    openBtn: document.querySelector('.popUpMenu__open--btn'),
    enterBtn: 'enter__enter--btn',
    regBtn: 'enter__reg--btn',

    createElm() {
        let div = document.createElement('div');
        div.setAttribute('class', 'enter');

        let h1 = document.createElement('h1');
        h1.innerHTML = `ЛИЦА <span><img src="./img/logo.png" alt=""></span> Кандидаты`;
        
        let h2 = document.createElement('h2');
        let textH2 = document.createTextNode('Получить доступ к базе проверенных кандидатов');
        h2.append(textH2);

        let emailInpt = document.createElement('input');
        emailInpt.setAttribute('placeholder', 'Email');

        let passwordInpt = document.createElement('input');
        passwordInpt.setAttribute('placeholder', 'Пароль');

        let tip = document.createElement('h5');
        tip.innerHTML = 'Забыли пароль';

        let enterBtn = document.createElement('button');
        enterBtn.setAttribute('class', elemetsEnters.enterBtn);
        enterBtn.innerHTML = `Войти`;

        let registrationBtn = document.createElement('button');
        registrationBtn.setAttribute('class', elemetsEnters.regBtn);
        registrationBtn.innerHTML = 'Зарегистрироваться';

        let img = document.createElement('img');
        img.setAttribute('src', './img/logo.png');

        h2.append(textH2);
        div.append(h1, h2, emailInpt, passwordInpt, tip, enterBtn, registrationBtn );

        return div;
    }
}

export function popUps(button, func, ...args) {
 let div;
 let closeBtn;
 let check = true;

 button.addEventListener('click', function () {

    showPopUpMenu(false);

    if(check) {
        check = false;

       div = func();

        body.append(func());
        body.style.backgroundColor = '#8d8d8d';
       closeBtn = document.querySelector(args[0]);

        closeBtn.addEventListener('click', () => {

            div = document.querySelector('.popUp__Follow');
            div.remove();
            body.style.backgroundColor = '#fff';

            check = true;

        });
    }
 });
} 
