import {createLogoH1} from './objUtiles.js';

export let elementsArrange = {
    divName: 'arrange popUpBlock otter',
    closeBtn: 'arrange--back',
    openBtn: 'arrange--btn',

    createElm() {
        let div = document.createElement('div');
        div.className = elementsArrange.divName;

        let h1 = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = 'В подписку включено';

        let h3First = document.createElement('h3');
        let h3Second = document.createElement('h3');

        h3First.innerHTML += `<span><img src="./img/yes.png" alt=""></span>Полная база, все направления`;
        h3Second.innerHTML += `<span><img src="./img/yes.png" alt=""></span>50 открытий контактов`;

        let buttonBack = document.createElement('button');
        buttonBack.className = elementsArrange.closeBtn;
        buttonBack.innerHTML = 'Закрыть';

        let buttonEnt = document.createElement('button');
        buttonEnt.className = elementsArrange.openBtn;
        buttonEnt.innerHTML = 'Активировать';

        div.append(h1, h2, h3First, h3Second, buttonBack, buttonEnt);
        
        return div;
    }  
}

export let elemtntsActivation = {
    divName: 'activate popUpBlock otter',
    closeBtn: 'activate--btn',

    createElm() {
        let div = document.createElement('div');
        div.className = elemtntsActivation.divName;

        let h1 = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Выберите подписку';

        let form = document.createElement('form');
        form.action = '#';
        form.innerHTML = `<input type="radio" id="mounth" value="mounth">
            <label for="mounth">1 месяц<span> 4900 Р</span></label>
            <input type="radio" id="year" value="year">
            <label for="year">1 год<span> 4900 Р</span></label>`

        let button = document.createElement('button');
        button.className = elemtntsActivation.closeBtn;
        button.innerHTML = 'Оформить';

        div.append(h1, h2, form, button);

        return div;

    }
}

export let elementsCounts = {
    divName: 'count popUpBlock otter',
    closeBtn: 'count--btn',

    createElm() {
        let div = document.createElement('div');
        div.className = elementsCounts.divName;


        let h1 = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = `Запрос счёта на доступ
        к базе, минимальный срок – 6 месяцев`;

        let inputName = document.createElement('input');
        inputName.placeholder = 'Ваше имя';
        
        let inpupPhone = document.createElement('input');
        inpupPhone.placeholder = 'Номер телефона';

        let button = document.createElement('button');
        button.className = elementsCounts.closeBtn;
        button.innerHTML = 'Оформить';

        div.append(h1, h2, inputName, inpupPhone, button);

        return div;
    }
}

export let elementsCanceled = {
    divName: 'cancel popUpBlock otter',
    closeBtn: 'cancel--btn',
    buttonCancel: 'cancel__cancel--btn',

    createElm() {
        let div = document.createElement('div');
        div.className = elementsCanceled.divName;


        let h1 = createLogoH1();

        let h2 = document.createElement('h2');
        h2.innerHTML = `Если вы отмените подписку, то она будет действовать до оплаченного срока,
        а затем вы потеряет доступ к базе проверенных кандидатов`;

        let buttonBack = document.createElement('button');
        buttonBack.className = elementsCanceled.closeBtn;
        buttonBack.innerHTML = 'Закрыть';

        let buttonCancel = document.createElement('button');
        buttonCancel.className = elementsCanceled.buttonCancel;
        buttonCancel.innerHTML = 'Все равно отменить';

        div.append(h1, h2, buttonBack, buttonCancel);

        return div;
    }
}