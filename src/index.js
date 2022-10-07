import { Logic } from "./modules/logic.js";

const search = document.querySelector("input[type='search']");
const submit = document.querySelector("input[type='submit']");

submit.addEventListener("click", async () => {
  console.log(search.value);
  const location = search.value;
  console.log(await Logic.getWeather(location));
});
