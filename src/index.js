import { Logic } from "./modules/logic.js";
import { DOM } from "./modules/dom.js";

const search = document.querySelector("input[type='search']");
const submit = document.querySelector("button");

// listen for enter key or button click to get weather
search.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) weather();
});

submit.addEventListener("click", weather);

async function weather() {
  // run API call for weather data based on search value
  const location = search.value;
  const data = await Logic.getWeather(location);

  // display results and change background color based on location coordinates
  DOM.showWeather(data);
  DOM.colorCoordinate(data);
}
