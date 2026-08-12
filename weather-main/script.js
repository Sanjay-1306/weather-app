// 5cdd1e6645a882b165a1165fe76c97cb
async function getWeather() {
  let city = document.getElementById("city").value;
  if (!city) return alert("Please enter a city name");

  const apiKey = "5cdd1e6645a882b165a1165fe76c97cb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("city").value = "";
    if (data.cod !== 200) {
      alert(data.message);
      return;
    }

    document.getElementById("city-name").innerText = data.name;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById(
      "wind-speed"
    ).innerText = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById(
      "weather-icon"
    ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById("weather-info").classList.remove("hidden");
    changeBackground(data.weather[0].main);
  } catch (error) {
    alert("Error fetching weather data");
  }
}
function changeBackground(weather) {
  const weatherConditions = {
    Clear: "images/clear.jpg",
    Clouds: "images/clouds.jpg",
    Rain: "images/rain.jpg",
    Snow: "images/snow.jpg",
    Thunderstorm: "images/thunder.jpg",
    Drizzle: "images/drizzle.jpg",
    Mist: "images/mist.jpg",
    Fog: "images/fog.jpg",
    Haze: "images/haze.jpg",
    Smoke: "images/smoke.jpg",
  };

  document.body.style.backgroundImage = `url(${
    weatherConditions[weather] || "images/default.jpg"
  })`;
}
