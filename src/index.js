import './styles.css';
import './cart/cart';
import  './js/menu';
import './js/localstorage';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

//===========
export const bodyRef = document.querySelector('body');
export  const switchRef = document.querySelector('.js-switch-input');



 //============
 



//  const openModalBtnRef = document.querySelector('.js-button');
//  const modalTemplate = document.querySelector('#modal');

//  const instance = basicLightbox.create(modalTemplate, {
//      onShow(instance)  {
//          const closeModalBtnRef = getCloseModalBtnRef(instance);
//          closeModalBtnRef.addEventListener('click', instance.close);
//      },
//      onClose(instance){
//          const closeModalBtnRef = getCloseModalBtnRef(instance);
//          closeModalBtnRef.removeEventListener('click', instance.close);
//      },
//  });
//  openModalBtnRef.addEventListener('click', instance.show);

//  function getCloseModalBtnRef(parent){
//  return parent.element().querySelector('button[data-close-modal]');
// };









