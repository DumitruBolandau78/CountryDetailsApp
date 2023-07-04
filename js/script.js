const searchBtn = document.querySelector("button");
const input = document.querySelector("input");

const countryFlag = document.querySelector(".country-info__flag");
const countryName = document.querySelector(".country-info__name");
const countryCapital = document.querySelector(".country-info__capital");
const countryContinent = document.querySelector(".country-info__continent");
const countryPopulation = document.querySelector(".country-info__population");
const countryCurrency = document.querySelector(".country-info__currency");
const countryLanguages = document.querySelector(".country-info__languages");
const displayError = document.querySelector(".display-error");

searchBtn.addEventListener("click", () => {
  let countryName = input.value;

  if (input.value === "") {
    alert("Please insert a value! Thank you");
    return;
  }

  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  let date = fetch(finalURL)
    .then(response => response.json())
    .then(data => showInfo(data))
});

function showInfo(dataServer) {
    countryFlag.innerHTML = ``;
    countryName.innerHTML = ``;
    countryCapital.innerHTML = `<b>Capital:</b> `;
    countryContinent.innerHTML = `<b>Continent:</b> `;
    countryPopulation.innerHTML = `<b>Population:</b> `;
    countryCurrency.innerHTML = `<b>Currency:</b> `;
    countryLanguages.innerHTML = `<b>Laguages:</b> `;

    countryFlag.innerHTML += `<img class='flag' src="${dataServer[0].flags.svg}"/>`;
    countryName.innerHTML += `${dataServer[0].name.common}`;
    countryCapital.innerHTML += `${dataServer[0].capital}`;
    countryContinent.innerHTML += `${dataServer[0].continents}`;
    countryPopulation.innerHTML += `${dataServer[0].population}`;

    for (let key in dataServer[0].currencies) {
      let currency = `${dataServer[0].currencies[key].name}`;
      countryCurrency.innerHTML += `${currency} `;
    }

    for (let key in dataServer[0].languages) {
      let language = dataServer[0].languages[key];
      countryLanguages.innerHTML += `${language} `;
    }
}
