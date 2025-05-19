const apiKey = 'ccc9c7635f1e1fe5abdbaaeb1fe53341'; 

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherInfo = document.getElementById('weatherInfo');

  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      const { name, main, weather, wind } = data;

      weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" />
        <p><strong>${weather[0].main}</strong>: ${weather[0].description}</p>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
      `;
      weatherInfo.style.display = 'block';
    })
    .catch(error => {
      alert(error.message);
      weatherInfo.style.display = 'none';
    });
}
