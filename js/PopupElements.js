import * as utiles from './utiles.js';

const body = document.querySelector('body');

export let elementsFollow = {
    openBtn: document.querySelector('.follow__section--btn'),
    classCloseBtn: 'popUp__Follow--btn', 
    divName: 'popUp__Follow',
    
    createElm() {
        let div = document.createElement('div');
        div.setAttribute('class', elementsFollow.divName);

        let h1 = createLogoH1();
        let h2 = document.createElement('h2');

        let btn = document.createElement('button');
        btn.setAttribute('class', elementsFollow.classCloseBtn);

        let img = document.createElement('img');
        img.setAttribute('src', './img/logo.png');

        btn.innerHTML = `Закрыть`;

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

        let h1 = createLogoH1();
        
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

        let h1 = createLogoH1();

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

export let elementsThanks = {
    closeBtn: 'recovery__password--btn',
    divName: 'recovery__password',

    createElm() {
        let div = document.createElement('div');
        div.className = elementsThanks.divName;

        let h1 = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = `На ваш email выслана ссылка для восстановления пароля.`;

        let button = document.createElement('button');
        button.innerHTML = 'Спасибо';
        button.className = elementsThanks.closeBtn;

        div.append(h1, h2, button);

        return div;
    }
}

export let elementsRegistration = {
    closeBtn: 'registration__back',
    enterBtn: 'registration__reg',
    divName: 'registration',

    createElm() {
        let div = document.createElement('div');
        div.className = elementsRegistration.divName;

        let exitBtn = document.createElement('div');
        exitBtn.className = 'enter__exit';

        exitBtn.innerHTML = `<div class="registration__exit"><div class="registration__exit__block">
        <div class="registration__exit__block--elm"></div></div></div>`;


        let h1 = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Регистрация';

        let inputName = document.createElement('input');
        let inputEmail = document.createElement('input');
        let inputPassword = document.createElement('input');
        let inputPasswordConf = document.createElement('input');

        inputName.placeholder = 'Имя *';
        inputEmail.placeholder = 'Email ';
        inputPassword.placeholder = 'Пароль *';
        inputPasswordConf.placeholder = 'Повторите пароль *';

        let button = document.createElement('button');
        button.className = elementsRegistration.enterBtn;
        button.innerHTML = 'Зарегистрироваться';

        div.append(exitBtn, h1, h2, inputName, inputEmail, inputPassword, 
            inputPasswordConf, button);

        return div;
    }
}




export async function popUps(func, backg, NameCloseBtn, prevDiv, div) {
    let closeBtn;

    changeBgColor(backg, '#8d8d8d');

    body.append( func() );

    if(NameCloseBtn != null) {

        closeBtn = document.querySelector(NameCloseBtn);
        closeBtn.addEventListener('click', () => {
    
            utiles.showPrevPopUp(prevDiv);
            closePopup(null, div);
        });
    } 
} 

function changeBgColor( bgClass, color ) {
    console.log(bgClass);

    let a;
    if(bgClass) {
        a = document.querySelector(bgClass);
        a.style.backgroundColor = color;
    }
}

function closePopup(body, divName) {
    let div = document.querySelector(divName);
    div.remove();

    if( body != null ) {
        body.style.backgroundColor = '#fff'; 
    } 
}

function createLogoH1() {
    let h1 = document.createElement('h1');
    h1.innerHTML = `ЛИЦА <span><img src="./img/logo.png" alt=""></span> Кандидаты`;

    return h1;
}
