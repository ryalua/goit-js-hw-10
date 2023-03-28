import fetchCountries from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import renderHtml from './js/renderHtml';

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputCountry.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput() {
    
    let countryNameInput = inputCountry.value.trim();
    if(!countryNameInput) {
        countriesList.innerHTML = "";
        countryInfo.innerHTML = "";
        console.log('not');
    }
    fetchCountries(countryNameInput)
    .then(countries => {
        renderHtml(countries);
        console.log(countryNameInput);
    })
    .catch(() => {
        Notify.failure("Oops, there is no country with that name")
    })
};







