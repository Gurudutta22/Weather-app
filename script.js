const  apiKey = "5e7db72a8bfe4b186870ea902f74787b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiURL + '&appid=${apiKey}')
    var data = await response.json();

    console.log(data);
}

checkWeather();
