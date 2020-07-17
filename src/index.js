import './styles.css';
// import {
//   debounce
// } from 'debounce';
var debounce = require('lodash.debounce');
import PNotify from 'pnotify/dist/es/PNotify.js';
// import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import countriesTpl from './templates/countries.hbs';
import countryTemplate from './templates/countryTemplate.hbs';

// PNotify.alert('Notice me, senpai!');

// const axios = require('axios').default;

//===========



const refs = {
  search: document.querySelector('.input'),
  content: document.querySelector('.content'),
};



refs.search.addEventListener('input', debounce((event => {
  const inputValue = event.target.value;
  fetchCountries(inputValue)

}), 500));


function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())


    .then(countries => {
      if (countries.length > 10) {
        PNotify.error({
          title: 'Too many matches found.',
          text: 'Please enter a more specific query!'
        })
      }
      if (countries.length < 10) {
        const listOfCountries = countries.map(country => country.name)
        console.log(listOfCountries);
        const markup = countriesTpl(listOfCountries);
        refs.content.innerHTML = markup;
      }
      if (countries.length === 1) {
        const markup = countryTemplate(
          countries[0]
        );
        refs.content.innerHTML = markup;
      }
    })
  // .then((
  //   countries
  // ) => countriesMarkup(countries))


};

// function countriesMarkup(countriesList) {
//   const markup = countriesTpl(countriesList)
//   refs.content.innerHTML = markup;
// }















// refs.input.addEventListener('input')
// let result = '';


// function fetchCountries(searchQuery) {
//   searchQuery = `sudan`;
//   const url = `https://restcountries.eu/rest/v2/name/{${searchQuery}}`;
//   return fetch(url).then(res => res.json()).then(([countries]) => countries);
// }

// fetchCountries();
// refs.input.addEventListener(('input', fetchCountries);






// refs.input.addEventListener(
//   'input',
//   debounce(function (e) {
//     result = e.target.value;
//     if (result !== '') {
//       fetch(`https://restcountries.eu/rest/v2/name/${result}`)
//         .then(res => res.json())
//         .then(([countries]) => {
//           countries.forEach(element => {
//             for (let i = 0; i < element.length; i += 1) {
//               console.log(element[i].name);

//               const markup = countriesTpl.forEach(element[i].name);
//               refs.content.insertAdjacentHTML('beforeend', markup);
//               console.log(markup);
//             }
//           });
//         });

//       // .catch(error => console.log(error));
//     }
//   }, 500),
// );

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
