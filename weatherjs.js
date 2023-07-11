document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '6d40948f959843da84b154932231007';
  
    // Get tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().slice(0, 10);
  
    // Make a request to the API
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=New Delhi&dt=${tomorrowDate}`)
      .then(response => response.json())
      .then(data => {
        // Extract temperature and rain forecast for tomorrow
        const temperature = data.forecast.forecastday[0].day.avgtemp_c;
        const rainChance = data.forecast.forecastday[0].day.daily_chance_of_rain;
  
        // Display the temperature and rain forecast on the website
        const temperatureElement = document.getElementById('temperature');
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
  
        const rainForecastElement = document.getElementById('rain-forecast');
        rainForecastElement.textContent = `Rain Forecast: ${rainChance}% chance of rain`;
      })
      .catch(error => {
        // Handle error if the request fails
        const weatherInfoElement = document.getElementById('weather-info');
        weatherInfoElement.innerHTML = '<p>Failed to fetch weather forecast.</p>';
      });
  
    // Add dark mode class to the body
    document.body.classList.add('dark-mode');
  });
  