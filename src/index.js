import { Logic } from "./modules/logic.js";
import { DOM } from "./modules/dom.js";

const search = document.querySelector("input[type='search']");
const submit = document.querySelector("input[type='submit']");

submit.addEventListener("click", async () => {
  const location = search.value;
  const data = await Logic.getWeather(location);
  DOM.showWeather(data);
});
