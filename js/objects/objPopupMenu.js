let objList = {
    markets: 'Маркетинг',
    backeEnd: 'Backend-разработчик',
    disign: 'Дизайнеры',
    manage: 'Менеджеры по продажам',
    place1: 'Пункт 1',
    place2: 'Пункт 2',
    place3: 'Пункт 1',
}


export let popUpMenuNotAuto = {
    divName: 'popUpMenu',

    createElm() {
        let div = document.createElement('div');
        div.className = popUpMenuNotAuto.divName;

        let header = document.createElement('header');
        header.innerHTML = `<img src="./img/logo.png" alt="">
            <div class="popUpMenu--menu">
                <div class="menu--item"></div>
            </div>`;
        
        let divSearch = document.createElement('div');
        divSearch.className = `${popUpMenuNotAuto.divName}__search`;
        divSearch.innerHTML = `<i class="bi bi-search"></i>
            <input type="text" placeholder="Поиск">`;
        
        let divList = document.createElement('div');
        divList.className = `${popUpMenuNotAuto.divName}__mergeList`;
        divList.append( createList() );

        let span = document.createElement('span');
        span.className = `show--more`;
        span.innerHTML = `Еще <span><i class="bi bi-caret-down"></i></span>`;

        let ul = document.createElement('ul');
        ul.className = `${popUpMenuNotAuto.divName}__list`;
        ul.innerHTML = `<li><a href="./search.html">Найти кандидата</a></li>
        <li><a href="#">Попасть в базу</a></li>
        <li><a href="#">О сервисе</a></li>`;

        let button = document.createElement('button');
        button.className = `${popUpMenuNotAuto.divName}__open--btn`;
        button.innerHTML = `Войти`;

        let h4 = document.createElement('h4');
        h4.className = `${popUpMenuNotAuto.divName}__regLink`;
        h4.innerHTML = `Еще нет аккаунта?<a class="popUpMenu__reg--btn"> Зарегистрироваться</a>`;

        div.append(header, divSearch, divList, span, ul, button, h4);

        return div;
    }
}


export let popUpMenuNotConf = {
    divName: 'popUpMenu',

    createElm() {
        let div = document.createElement('div');
        div.className = popUpMenuNotAuto.divName;

        let header = document.createElement('header');
        header.innerHTML = `<img src="./img/logo.png" alt="">
            <div class="popUpMenu--menu">
                <div class="menu--item"></div>
            </div>`;
        
        let divSearch = document.createElement('div');
        divSearch.className = `${popUpMenuNotAuto.divName}__search`;
        divSearch.innerHTML = `<i class="bi bi-search"></i>
            <input type="text" placeholder="Поиск">`;
        
        let divList = document.createElement('div');
        divList.className = `${popUpMenuNotAuto.divName}__mergeList`;
        divList.append( createList() );

        let span = document.createElement('span');
        span.className = `show--more`;
        span.innerHTML = `Еще <span><i class="bi bi-caret-down"></i></span>`;

        let ul = document.createElement('ul');
        ul.className = `${popUpMenuNotAuto.divName}__list`;
        ul.innerHTML = `<li><a href="./search.html">Найти кандидата</a></li>
        <li><a href="#">Попасть в базу</a></li>
        <li><a href="#">О сервисе</a></li>`;

        let divProfile = document.createElement('div');
        divProfile.className = `${popUpMenuNotConf.divName}__profile`;
        divProfile.innerHTML = `<img src="./img/people/Avatar(3).png" alt="">
        <h2>Иван Петров</h2>
        <h3><span><div></div></span> Подписка не дейсчтвительна</h3>`;

        let ulExit = document.createElement('ul');
        ulExit.innerHTML = `<li><a href="./profile.html">Посмотреть профиль</a></li>
        <li><a class="popUpMenu__backToReg">Выйти</a></li>`;

        div.append(header, divSearch, divList, span, ul, divProfile, ulExit);

        return div;
    }
}




function createList() {
    let ul = document.createElement('ul');
    for(let prop in objList) {
        let li = document.createElement('li');
        li.className = `head-item`;
        li.id = prop;
        li.innerHTML = objList[prop];

        let subUl = document.createElement('ul');
        subUl.className = prop;
        
        ul.append(li, subUl);
        
    }

    return ul;
}
