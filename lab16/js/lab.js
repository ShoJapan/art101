// index.js - purpose and description here
// Author: Sho Serrano
// Date: 06-01-2023

// Functions
function fetchWeatherData() {
  var selectedCity = document.getElementById("citySelect").value;
  var url = "https://www.metaweather.com/api/location/search/?query=" + selectedCity;

  fetch(url)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          if (data.length > 0) {
              var woeid = data[0].woeid;
              url = "https://www.metaweather.com/api/location/" + woeid;

              fetch(url)
                  .then(function(response) {
                      return response.json();
                  })
                  .then(function(weatherData) {
                      var consolidatedWeather = weatherData.consolidated_weather;
                      if (consolidatedWeather.length > 0) {
                          var weather = consolidatedWeather[0];
                          var temperature = weather.the_temp;
                          var weatherState = weather.weather_state_name;

                          var weatherInfo = "Weather in " + selectedCity + "<br>" +
                              "Temperature: " + temperature + "°C<br>" +
                              "Weather State: " + weatherState;

                          var weatherDataElement = document.getElementById("weatherData");
                          weatherDataElement.innerHTML = weatherInfo;
                      }
                  })
                  .catch(function(error) {
                      console.log("Error fetching weather data: " + error);
                  });
          }
      })
      .catch(function(error) {
          console.log("Error fetching WOEID: " + error);
      });
}