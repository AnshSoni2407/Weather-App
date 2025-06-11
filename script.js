function start() {
  let user_input = document.querySelector("input").value;
  console.log(user_input);
  console.log("hello");

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=2906b3a56f124003a6c73807240903&q=${user_input}&aqi=yes`
  )
    .then((Response) => Response.json())
    .then((data) => {
      document.querySelector(".city_name").innerHTML = data.location.name;
      document.querySelector(".country").innerHTML = data.location.country;
      document.querySelector(
        ".temp_display"
      ).innerHTML = `${data.current.temp_c} &deg;C`;
      document.querySelector(".humid_display").innerHTML =
        data.current.humidity;
      document.querySelector(
        ".wind_display"
      ).innerHTML = `${data.current.wind_kph}kph`;

      console.log(data);
      document.querySelector("input").value = "";
      document.querySelector(
        ".main_text"
      ).innerHTML = `Weather in ${user_input}`;
    })
    .catch((err) => {
      console.log("Please enter a valid city name");
      document.querySelector(".main_text").innerHTML =
        "Enter a valid city name";

      document.querySelector(".city_name").innerHTML = "_ _";
      document.querySelector(".temp_display").innerHTML = "_ _";
      document.querySelector(".humid_display").innerHTML = "_ _";
      document.querySelector(".wind_display").innerHTML = "_ _";

      console.log(data);
      document.querySelector("input").value = "";
    });
}
