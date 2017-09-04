/* eslint-env browser */
import './style.scss';

let curTemp;

function convTemp() {
    const display = document.getElementById('temp-display');
    const type = document.getElementById('type');

    function far(val) {
        return ((val * (9 / 5)) + 32).toFixed(1);
    }

    if (!display.classList.contains('far')) {
        display.classList.toggle('far');
        display.textContent = far(curTemp);
        type.textContent = 'F';
    } else {
        display.classList.toggle('far');
        display.textContent = curTemp;
        type.textContent = 'C';
    }
}

window.onload = () => {
    // Get the Weather
    let wData;
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

                    weather.open('GET', url, true);
                    weather.send();
                    weather.onload = () => {
                        wData = JSON.parse(weather.responseText);
                        window.console.log(wData);

                        curTemp = Math.floor(wData.main.temp);

                        document.getElementById('temp-display')
                            .textContent = curTemp;

                        document.getElementById('city')
                            .textContent = wData.name;
                    };
                });
            } else {
                window.console.log('Browser does not support geolocation.');
            }
        })();
    }

    document.getElementById('temp-box')
        .addEventListener('click', () => convTemp());

    function clock() {
        const time = new Date();
        document.getElementById('date').textContent = time.toLocaleString();
    }
    setInterval(clock, 1000);
};
