const container = document.querySelector('.container');
const searchButton = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

searchButton.addEventListener('click', () => {

    const APIKey = 'b99ccba921cc90a842cd466fe4d0e135';
    const city = document.querySelector('.search-box input').value.trim();

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '550px';
                weatherBox.style.visibility = 'hidden';
                weatherDetails.style.visibility = 'hidden';
                error404.style.visibility = 'visible';
                error404.classList.add('active');
                return;
            }

            error404.style.visibility = 'hidden';
            error404.classList.remove('active');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.humidity span');
            const wind = document.querySelector('.wind span');