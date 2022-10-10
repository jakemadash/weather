const DOM = (() => {
  function showWeather(data) {
    const error = document.querySelector("p");
    const divs = document.querySelectorAll(".weather div:not(.range)");

    // check for error (only time data won't be an array)
    if (!Array.isArray(data)) {
      error.textContent = data;
      divs.forEach((div) => {
        div.textContent = "";
      });
    }

    // otherwise, populate divs with data content
    else error.textContent = "";
    divs.forEach((div, index) => {
      div.textContent = data[index];
    });
  }

  function colorCoordinate(data) {
    const root = document.querySelector(":root");
    const longitude = data[7];
    const latitude = data[8];
    const random = longitude - latitude;

    // generate background color gradient based on location coordinates
    root.style.background = `linear-gradient(rgba(${longitude}, ${latitude}, ${random}, 0.5), rgba(${
      255 - longitude
    }, ${255 - latitude}, ${255 - random}, 0.5))`;
  }

  return { showWeather, colorCoordinate };
})();

export { DOM };
