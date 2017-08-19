/* eslint-env browser */
import './style.scss';

const curTemp = 24.3;

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
  let wData = {};

  // Get the Weather
  if (window.XMLHttpRequest) {
    (() => {
      const weather = new XMLHttpRequest();
      let lat;
      let lon;
      let url;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          lat = pos.coords.latitude;
          lon = pos.coords.longitude;
          url = 'https://fcc-weather-api.glitch.me/api/current?lat='
            .concat(lat, '&lon=', lon);
        })();
      } else {
        console.log('Error retrieving weather data.');
      }

      weather.open('GET', url, true);
      weather.send();
    })();
  }
  //  let currentWeather;
  //
  //  (() => {
  //    function store(weatherData) {
  //      currentWeather = weatherData;
  //    }
  //
  //    if (navigator.geolocation) {
  //      navigator.geolocation.getCurrentPosition((pos) => {
  //        const lat = pos.coords.latitude;
  //        const lon = pos.coords.longitude;
  //        const url = 'https://fcc-weather-api.glitch.me/api/current?lat='
  //          .concat(lat, '&lon=', lon);
  //        $.getJSON(url, data => store(data));
  //      });
  //    }
  //  })();

  document.getElementById('temp-box')
    .addEventListener('click', () => convTemp());

  function clock() {
    const time = new Date();
    document.getElementById('date').textContent = time.toLocaleString();
  }
  setInterval(clock, 1000);
};
