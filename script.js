let info = document.querySelector("section");

let capitalDiv = document.createElement("div");
let flagDiv = document.createElement("div");
let countryDiv = document.createElement("div");
let continentDiv = document.createElement("div");

function search() {
  let textCountry = document.querySelector(".text").value;
  countryDiv.innerHTML = ` <span>pays</span><br><p>${textCountry}</p`;

  let url = "https://restcountries.com/v3.1/name/" + textCountry;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const country = data[0];
      const capital = country.capital;
      const flag = country.flags.svg;
      const continent = country.continents;

      capitalDiv.innerHTML = ` <span>capital</span><br><p>${capital}</p`;
      continentDiv.innerHTML = ` <span>continent</span><br><p>${continent}</p`;
      flagDiv.innerHTML = ` <span>drapeau</span><br><img src = ${flag}>`;

      info.appendChild(countryDiv);
      info.appendChild(continentDiv);
      info.appendChild(flagDiv);
      info.appendChild(capitalDiv);
    })
  );
}
