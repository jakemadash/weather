async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=854a38f309013f91912348c4a71610bb&units=imperial
    `,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}
