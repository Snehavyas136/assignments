const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherInfo = document.getElementById('weatherInfo');
  const errorMessage = document.getElementById('errorMessage');

  if (!city) {
    errorMessage.textContent = 'Please enter a city name.';
    weatherInfo.classList.add('hidden');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      document.getElementById('cityName').textContent = data.name;
      document.getElementById('weatherCondition').textContent = data.weather[0].main;
      document.getElementById('temperature').textContent = Math.round(data.main.temp);
      document.getElementById('humidity').textContent = data.main.humidity;
      document.getElementById('windSpeed').textContent = data.wind.speed;

      const iconCode = data.weather[0].icon;
      document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      errorMessage.textContent = '';
      weatherInfo.classList.remove('hidden');
    } else {
      errorMessage.textContent = 'City not found. Please try again.';
      weatherInfo.classList.add('hidden');
    }
  } catch (error) {
    errorMessage.textContent = 'An error occurred. Please try again.';
    weatherInfo.classList.add('hidden');
  }
}