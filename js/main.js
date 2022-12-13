import {slider} from './slider.js';
import {showPopUpMenu} from './popUpMenu.js';
import { peopelSlider } from './peopleSlider.js';
import { popUps, elementsFollow, elemetsEnters } from './PopupElements.js';

slider();

showPopUpMenu(true);

peopelSlider();

popUps(elementsFollow.openBtn, elementsFollow.createElm, '.popUp__Follow', 'body','.popUp__Follow--btn');
popUps(elemetsEnters.openBtn, elemetsEnters.createElm, '.enter', '.popUpMenu','.enter__exit__block');

