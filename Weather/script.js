function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '0e4df4f60136461dbe434305250707'; // Replace with your actual API key from weatherapi.com

  if (!city) {
    document.getElementById('weatherResult').innerText = 'Please enter a city name.';
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found or API error.');
      }
      return response.json();
    })
    .then(data => {
      const name = data.location.name;
      const region = data.location.region;
      const country = data.location.country;
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      const icon = data.current.condition.icon;

      document.getElementById('weatherResult').innerHTML = `
        🌍 <strong>${name}, ${region}, ${country}</strong><br>
        🌡️ Temperature: <strong>${temp}°C</strong><br>
        🌤️ Condition: <strong>${condition}</strong><br>
        <img src="https:${icon}" alt="${condition}">
      `;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerText = `Error: ${error.message}`;
    });
}
