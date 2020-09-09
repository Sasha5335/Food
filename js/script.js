import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

	const modalTimertId = setTimeout(() => openModal('.modal', modalTimertId), 50000);

	calc();
	cards();
	forms('form', modalTimertId);
	modal('[data-modal]', '.modal', modalTimertId);
	slider();
	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	timer('.timer', '2020-12-11');

});