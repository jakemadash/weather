import { Logic } from "./modules/logic.js";
import { DOM } from "./modules/dom.js";

const search = document.querySelector("input[type='search']");
const submit = document.querySelector("button");

search.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) weather();
});
submit.addEventListener("click", weather);

async function weather() {
  const location = search.value;
  const data = await Logic.getWeather(location);
  DOM.showWeather(data);
  DOM.colorCoordinate(data);
}
