async function getData(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=854a38f309013f91912348c4a71610bb&units=imperial
      `,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(response);
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log("Error, try again.");
  }
}

function getWeather(data) {
  const location = data.name;
  const currentTemp = data.main.temp;
  const lowTemp = data.main.temp_min;
  const highTemp = data.main.temp_max;
  const humidity = data.main.humidity;
  const feelsLike = data.main.feels_like;
  const wind = data.wind.speed;
  const conditions = [
    location,
    currentTemp,
    lowTemp,
    highTemp,
    humidity,
    feelsLike,
    wind,
  ];

  conditions.forEach((condition) => {
    console.log(condition);
  });
}
