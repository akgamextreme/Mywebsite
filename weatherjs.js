document.addEventListener('DOMContentLoaded', function() {
  const apiKey = '6d40948f959843da84b154932231007';

  // Get elements
  const locationSelect = document.getElementById('location');
  const temperatureElement = document.getElementById('temperature');
  const rainForecastElement = document.getElementById('rain-forecast');

  // Function to fetch weather data
  function fetchWeatherData(location) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=2`)
      .then(response => response.json())
      .then(data => {
        // Extract temperature and rain forecast for tomorrow
        const tomorrowData = data.forecast.forecastday[1].day;
        const temperature = tomorrowData.avgtemp_c;
        const rainChance = tomorrowData.daily_chance_of_rain;

        // Display the temperature and rain forecast on the website
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
        rainForecastElement.textContent = `Rain Forecast: ${rainChance}% chance of rain`;
      })
      .catch(error => {
        // Handle error if the request fails
        temperatureElement.textContent = 'Failed to fetch weather data.';
        rainForecastElement.textContent = '';
      });
  }

  // Event listener for location select change
  locationSelect.addEventListener('change', function() {
    const selectedLocation = locationSelect.value;
    fetchWeatherData(selectedLocation);
  });

  // Fetch weather data for default location
  fetchWeatherData(locationSelect.value);
});
