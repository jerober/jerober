// //Home Page JSON Data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);
            let h3 = document.createElement('h3');
            h3.textContent = towns[i].motto;
            card.appendChild(h3);
            let p = document.createElement('p');
            p.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(p);
            let p2 = document.createElement('p');
            p.textContent = 'Population: ' + towns[i].currentPopulation;
            card.appendChild(p2);
            let p3 = document.createElement('p');
            p.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            card.appendChild(p3);
        }
    });