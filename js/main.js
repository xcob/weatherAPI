// Open Weather Map API Request for weather
var xhr = new XMLHttpRequest();
var date = new Date();

xhr.onload = function (response) {
  var weatherData = this.responseText;
  weatherData = JSON.parse(weatherData);

  var weatherType = weatherData.list[1].weather[0].main;
  console.log(weatherType);
//  var weatherImg = document.getElementById("weatherImg").src;

  switch (weatherType) {
    case 'Clouds':
      document.getElementById('weatherImg').innerText = "cloud_queue";
      document.getElementById('weatherText').innerText = "Cloudy";

      break;
    case 'Rain':
      document.getElementById('weatherImg').innerText = "grain";
      document.getElementById('weatherText').innerText = "Rainy";

      break;
    case 'Clear':
      document.getElementById('weatherImg').innerText = "wb_sunny";
      document.getElementById('weatherText').innerText = "Clear";

      break;


    default:
      document.getElementById('weatherText').innerText = "There is no weather to display";


  }


  document.getElementById("fullDate").innerHTML = date.toDateString();
  document.getElementById('city').innerHTML = weatherData.city.name;
  document.getElementById('tempCurrent').innerHTML = parseInt(weatherData.list[1].main.temp) + "&deg;";
  document.getElementById('tempHighNum').innerHTML = parseInt(weatherData.list[1].main.temp_max) + "&deg;";
  document.getElementById('tempLowNum').innerHTML = parseInt(weatherData.list[1].main.temp_min) + "&deg;";
}

xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=4049979&units=imperial&APPID=1592f37eff3556aacfc68b90d8a29a11', true);
xhr.send();
