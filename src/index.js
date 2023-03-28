import fetchCountries from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import renderHtml from './js/renderHtml';

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('#search-box');

inputCountry.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput() {
    
    let countryNameInput = inputCountry.value.trim();
    fetchCountries(countryNameInput)
    .then(dataCountries => {
        renderHtml(dataCountries)
    })
    .catch(() => {
        Notify.failure("Oops, there is no country with that name")
    })
};







