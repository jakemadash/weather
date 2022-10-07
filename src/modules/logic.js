const Logic = (() => {
  async function getData(location) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=854a38f309013f91912348c4a71610bb&units=imperial
      `,
        { mode: "cors" }
      );

      if (response.ok) {
        const weatherData = await response.json();
        return weatherData;
      } else throw new Error("try again.");
    } catch (error) {
      console.log(typeof error);
      return error;
    }
  }

  async function getWeather(place) {
    const data = await getData(place);

    if (data instanceof Error) {
      return data;
    } else {
      const location = data.name;
      const currentTemp = `${Math.round(data.main.temp)}°F`;
      const lowTemp = `Low: ${Math.round(data.main.temp_min)}°F`;
      const highTemp = `High: ${Math.round(data.main.temp_max)}°F`;
      const humidity = `Humidity: ${data.main.humidity}%`;
      const wind = `Wind: ${data.wind.speed} mph`;
      const feelsLike = `Feels like ${Math.round(data.main.feels_like)}°F`;

      const conditions = [
        location,
        currentTemp,
        lowTemp,
        highTemp,
        humidity,
        wind,
        feelsLike,
      ];

      return conditions;
    }
  }

  return { getWeather };
})();

export { Logic };
