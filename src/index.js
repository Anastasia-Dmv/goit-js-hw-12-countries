//import PNotify from 'pnotify/dist/es/PNotify.js';
import './styles.css';
var debounce = require('lodash.debounce');
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import {
  fetchCountries
} from './fetchCountries';

export const refs = {
  search: document.querySelector('.input'),
  content: document.querySelector('.content'),
};

refs.search.addEventListener('input', debounce((event => {
  const inputValue = event.target.value;
  fetchCountries(inputValue)

}), 500));








//===========



// PNotify.alert('Notice me, senpai!');
// const axios = require('axios').default;
//import {debounce} from 'debounce';

// inputRef.addEventListener(
//   'input',
//   debounce(function (e) {
//     // console.log(e.target.value);
//     result = e.target.value;
//     if (result !== '') {
//       axios
//         .get(`https://restcountries.eu/rest/v2/name/${result}`)
//         .then(function (response) {
//           // handle success
//           console.log(response.data);
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         })
//         .finally(function () {
//           // always executed
//         });
//     }
//   }, 500),
// );
