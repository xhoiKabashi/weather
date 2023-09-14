// Define a function to fetch weather data and update the DOM
async function updateWeather(city) {
  const api =
    "http://api.weatherapi.com/v1/current.json?key=3a39ec3085694a678bb135737231209&q=";
  const result = api + city;
  const img = document.querySelector("#img");

  try {
    const response = await fetch(result);
    if (!response.ok) {
      alert("Vendos emrin e qytet sakte plzz!");
    }
    const data = await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML = `${city}, ${data.location.country}`;
    document.querySelector("#temp").innerHTML = `${data.current.temp_c}°C`;

    if (data.current.condition.text === "Clear" || data.current.condition.text === "Sunny") {
        img.src = "./img/sunny-Anime.jpg";
      } else if (data.current.condition.text.includes("cloud" || "Cloudy")) {
        img.src = "./img/g-claudy.jpg";
      } else if (data.current.condition.text === "Overcast") {
        img.src = "./img/g-claudy.jpg";
      } else if (
        data.current.condition.text === "Patchy light drizzle" ||
        data.current.condition.text === "Light drizzle" ||
        data.current.condition.text === "Light rain" ||
        data.current.condition.text.includes("rain")) 
     {
        img.src = "./img/rain-dayAnime.jpg";
      }    else if (data.current.condition.text === "Snow") {
        img.src = "./img/snow-Anime.jpg";
      }


  } catch (error) {
    console.error(error);
  }
}

// Attach the event listener to the button
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const city = document.querySelector("#input").value;
  updateWeather(city);
});

// Initial call with a default city (e.g., "Tirana")
updateWeather("Tirana");
