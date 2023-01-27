import {popUpMenuCeator, createPopUpMenu} from './popUpMenu.js';


const showMoreBtn = document.querySelector('.list__filter--btn');
const gridBlock = document.querySelector('.list__candidates');
const filterBtn = document.querySelector('.list__filter--Btn');

let saveFilterPage = document.querySelectorAll('section');
let checherShowMore = true;
let filterElement = `<section class="filter">
        <h1>Фильтр</h1>
        <div class="filter__buttons">
            <p><span></span><i class="bi bi-funnel"></i> Параметра</p>
            <p>Очистить все</p>
        </div>
        <div class="filter__inputs">
            <h2>Зарплата</h2>
            <div>
                <input type="text" placeholder="от">
                <input type="text" placeholder="до">
            </div>
        </div>
        <div class="filter__inputs">
            <h2>Возраст</h2>
            <div>
                <input type="text" placeholder="от">
                <input type="text" placeholder="до">
            </div>
        </div>
        <form action="/">
            <input type="radio" id="all" name="fav_language">
            <label for="all">Все</label><br>
            <input type="radio" id="man" name="fav_language">
            <label for="man">Мужчины</label><br>
            <input type="radio" id="woman" name="fav_language">
            <label for="woman">Женщины</label><br>
        </form>
        <button class="filter__submit">Применить</button>
        </section>
        `;

( () => {
    popUpMenuCeator();

    showMoreBtn.addEventListener('click', () => {
        if(checherShowMore) {
            gridBlock.style.height = 'auto';
            checherShowMore = false;
        } else {
            gridBlock.style.height = '40rem';
            checherShowMore = true;
        }
    });

    filterBtn.addEventListener('click', () => {
        saveFilterPage.forEach( item => {
            item.remove();
        });
        document.body.insertAdjacentHTML('beforeend', filterElement);

    });

    document.addEventListener('click', event => {
        if(event.target.className != 'filter__submit') return;

        document.querySelector('.filter').remove();

        saveFilterPage.forEach( item => {
            document.body.append(item);
        });
    });
})();

