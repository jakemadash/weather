const DOM = (() => {
  function showWeather(data) {
    const error = document.querySelector("p");
    const divs = document.querySelectorAll("div");

    if (!Array.isArray(data)) {
      error.textContent = data;
      divs.forEach((div) => {
        div.textContent = "";
      });
    } else error.textContent = "";
    divs.forEach((div, index) => {
      div.textContent = data[index];
    });
  }

  return { showWeather };
})();

export { DOM };
