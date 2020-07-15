
import itemsTemplate from '../templates/menu-items.hbs';
// import dishes from '../menu.json';
import { addToCart } from '../cart/cart';


//===================

import dishes  from '../menu.json';

import '../styles.css';

   
//=============

// const menRef = document.querySelector('.js-menu');

const menuList = {
    dishes,
};

console.log(menuList);
const refs = {
    menRef: document.querySelector('.menu'),
};

const addToOrder = e => {
    if (e.target.nodeName === 'BUTTON' && e.target.dataset.btn === 'cartBtn') {
        const id = e.target.closest('[data-id]').dataset.id;
        const dish = menuList.dishes.find(dish => dish.id === id);
        console.log(dish);
        addToCart(dish);
    } else return;
};
// menuRef.insertAdjacentHTML('beforeend', markup);
// menuRef.addEventListener('click', addToOrder);
// const markup = dishesTemplate(dishes);

const markup = itemsTemplate(dishes);
refs.menRef.insertAdjacentHTML('afterbegin', markup);
refs.menRef.addEventListener('click', addToOrder);