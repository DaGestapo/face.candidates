import * as utiles from './utiles.js';


const body = document.querySelector('body');

export let elementsFollow = {
    openBtn: document.querySelector('.follow__section--btn'),
    classCloseBtn: 'popUp__Follow--btn', 
    divName: 'popUp__Follow',
    
    createElm() {
        let div = document.createElement('div');
        div.setAttribute('class', elementsFollow.divName);

        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');

        let btn = document.createElement('button');
        btn.setAttribute('class', elementsFollow.classCloseBtn);

        let img = document.createElement('img');
        img.setAttribute('src', './img/logo.png');

        btn.innerHTML = `Закрыть`;

        h1.innerHTML = createLogoH1();
        let textH2 = document.createTextNode('Спасибо! Вы подписались на еженедельные обновления базы проверенных кандидатов.');

        h2.append(textH2);
        div.append(h1, h2, btn);

        return div;
    }
}

export let elemetsEnters = {
    openBtn: document.querySelector('.popUpMenu__open--btn'),
    classCloseBtn: 'enter__exit__block',
    enterBtn: 'enter__enter--btn',
    regBtn: 'enter__reg--btn',
    divName: 'enter',

    createElm() {
        let div = document.createElement('div');
        div.setAttribute('class', elemetsEnters.divName);

        let exitBtn = document.createElement('div');
        exitBtn.className = 'enter__exit';

        exitBtn.innerHTML = `<div class="enter__exit"><div class="enter__exit__block">
        <div class="enter__exit__block--elm"></div></div></div>`;

        let h1 = document.createElement('h1');
        h1.innerHTML = createLogoH1();
        
        let h2 = document.createElement('h2');
        let textH2 = document.createTextNode('Получить доступ к базе проверенных кандидатов');
        h2.append(textH2);

        let emailInpt = document.createElement('input');
        emailInpt.setAttribute('placeholder', 'Email');

        let passwordInpt = document.createElement('input');
        passwordInpt.setAttribute('placeholder', 'Пароль');

        let tip = document.createElement('h5');
        tip.className = 'enter__forgot';
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
        div.append(exitBtn, h1, h2, emailInpt, passwordInpt, tip, enterBtn, registrationBtn );

        return div;
    }
}

export let elementsForgotPassword = {
    closeBtn: 'forgot__password--back',
    enterBtn: 'forgot__password--change',
    divName: 'forgot__password',

    createElm() {
        let div = document.createElement('div');
        div.className = 'forgot__password';

        let h1 = document.createElement('h1');
        h1.innerHTML = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = `Забыли пароль?`;

        let input = document.createElement('input');
        input.style.placeholder = 'Email';

        let buttonOpen = document.createElement('button');
        buttonOpen.className = elementsForgotPassword.enterBtn;
        buttonOpen.innerHTML = 'Сброс пароля';

        let buttonClose = document.createElement('button');
        buttonClose.className = elementsForgotPassword.closeBtn;
        buttonClose.innerHTML = 'Назад';
        
        div.append(h1, h2, input, buttonOpen, buttonClose);

        return div;

    }

}

export async function popUps(func, divName, backg, NameCloseBtn, ...args) {
    let closeBtn;

    let back = document.querySelector(backg);

    body.append( func() );
    
    back.style.backgroundColor = '#8d8d8d';

    closeBtn = document.querySelector(NameCloseBtn);
    closeBtn.addEventListener('click', () => {
        closePopup(back, divName);  

        if(args.length != 0) {
            utiles.showPrevPopUp(args[0]);
        }
    }); 
} 


function closePopup(body, divName) {
    let div = document.querySelector(divName);
    div.remove();
    body.style.backgroundColor = '#fff'; 
}

function createLogoH1() {
    return `ЛИЦА <span><img src="./img/logo.png" alt=""></span> Кандидаты`;
}
