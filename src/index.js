/* eslint-env browser */
import { MDCRipple } from '@material/ripple';
import './style.scss';

let curTemp = 74;
let dataOutput;

function convTemp() {
    const display = document.getElementById('temp-display');
    const type = document.getElementById('type');
    const button = document.getElementById('b-type');

    function far(val) {
        return ((val * (9 / 5)) + 32).toFixed(1);
    }

    if (!display.classList.contains('far')) {
        display.classList.toggle('far');
        display.textContent = far(curTemp);
        type.textContent = 'F';
        button.textContent = 'C';
    } else {
        display.classList.toggle('far');
        display.textContent = curTemp;
        type.textContent = 'C';
        button.textContent = 'F';
    }
}

function displayWeather(data) {
    dataOutput = data;
    curTemp = data.main.temp.toFixed(1);

    document.getElementById('temp-display')
        .textContent = curTemp;

    document.getElementById('city')
        .textContent = data.name;

    const icon = document.createElement('img');
    icon.src = data.weather[0].icon;

    document.getElementById('image')
        .appendChild(icon);
}

window.onload = () => {
    // Get the Weather
    if (window.XMLHttpRequest) {
        const weather = new XMLHttpRequest();
        (() => {
            let lat;
            let lon;
            let url;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    lat = pos.coords.latitude;
                    lon = pos.coords.longitude;
                    url = 'https://fcc-weather-api.glitch.me/api/current?lat='
                        .concat(lat, '&lon=', lon);

                    // Comment below line to avoid unnecessary requests
                    // weather.open('GET', url, true);
                    weather.send();
                    weather.onload = () => {
                        displayWeather(JSON.parse(weather.responseText));
                        window.console.log(JSON.parse(weather.responseText));
                    };
                });
            } else {
                window.console.log('Browser does not support geolocation.');
            }
        })();
    }

    document.getElementById('temp-button').classList.add(
        'mdc-button',
        'mdc-button--accent',
        'mdc-button--raised',
        'mdc-button--dense',
    );

    MDCRipple.attachTo(document.querySelector('#temp-button'));
    document.getElementById('temp-button')
        .addEventListener('click', () => convTemp());

    function clock() {
        const time = new Date();
        document.getElementById('date').textContent = time.toLocaleString();
    }
    setInterval(clock, 1000);
};

