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