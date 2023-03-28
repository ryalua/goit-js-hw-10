import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderHtml(countries) {
    
    const countriesList = document.querySelector('.country-list');
    const countryInfo = document.querySelector('.country-info');
    let amountCountries = countries.length;
    
    let countriesLi = [];
    let countryName = countries[0];
    
    if (amountCountries > 10) {
       
        Notify.info("Too many matches found. Please enter a more specific name.")
    } else if(amountCountries >= 2 && amountCountries <= 10) {
    
       countries.map(country => {
        countriesLi += `
            <li class="country-item">
                <img src="${country.flags.svg}" class="flag" alt="flag">
                <span class="country-name">${country.name.common}</span>
            </li>
            `
            countriesList.innerHTML = countriesLi;
       })
       countryInfo.innerHTML = "";
    } else {
      
        countryInfo.innerHTML = `
        <div class="info-head">
            <img src="${countryName.flags.svg}" class="flag" alt="flag">
            <h2 class="info-title">${countryName.name.common}</h2>
        </div>
        
        <ul class="country-list">
            <li class="info-item">
                <span class="info-tex">Capital: </span>${countryName.capital}
            </li>
            <li class="info-item">
                <span class="info-tex">Population: </span>${countryName.population}
            </li>
            <li class="info-item">
                <span class="info-tex">Languages: </span>${Object.values(countryName.languages).join(', ')}
            </li>
        </ul>
        `
        countriesList.innerHTML = "" 
    }
}