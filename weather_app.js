//include weather API key 963d354b99284e2788a83240231307
var apiKey = "963d354b99284e2788a83240231307";
//include a variable for the search button
var searchButton = document.querySelector(".search-button");
//include a variable for the search box
var searchBox = document.querySelector(".search-box");
//include a variable for the weather data
var weatherData = document.querySelector(".weather-data");
//include a variable for the weather description
var description = document.querySelector(".description");
//include a variable for the temperature
var temperature = document.querySelector(".temperature");
//include a variable for the wind speed
var windSpeed = document.querySelector(".wind-speed");
//include a variable for the wind direction
var windDirection = document.querySelector(".wind-direction");
//include a variable for the humidity
var humidity = document.querySelector(".humidity");
//include a variable for the weather icon
var icon = document.querySelector(".icon");
//include a variable for the weather code
var code = document.querySelector(".code");
//include a variable for the weather icon URL
var iconUrl = document.querySelector(".icon-url");
//include a variable for the weather code URL
var codeUrl = document.querySelector(".code-url");
//include a variable for the weather description
var description = document.querySelector(".description");
//include a function that will fetch the weather data
function getWeather() {
    fetch(location)
        .then(function (response) {
            return response.json();
        }
        )
        .then(function (data) {
            console.log(data);
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the temperature
            var temperature = data.main.temp;
            //include a variable for the wind speed
            var windSpeed = data.wind.speed;
            //include a variable for the wind direction
            var windDirection = data.wind.deg;
            //include a variable for the humidity
            var humidity = data.main.humidity;
            //include a variable for the weather icon
            var icon = data.weather[0].icon;
            //include a variable for the weather code
            var code = data.weather[0].code;
            //include a variable for the weather icon URL
            var iconUrl = data.weather[0].iconUrl;
            //include a variable for the weather code URL
            var codeUrl = data.weather[0].codeUrl;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
            //include a variable for the weather description
            var description = data.weather[0].description;
        }
        )
}
//include a function that will display the weather data
function displayWeather() {
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the temperature
    var temperature = data.main.temp;
    //include a variable for the wind speed
    var windSpeed = data.wind.speed;
    //include a variable for the wind direction
    var windDirection = data.wind.deg;
    //include a variable for the humidity
    var humidity = data.main.humidity;
    //include a variable for the weather icon
    var icon = data.weather[0].icon;
    //include a variable for the weather code
    var code = data.weather[0].code;
    //include a variable for the weather icon URL
    var iconUrl = data.weather[0].iconUrl;
    //include a variable for the weather code URL
    var codeUrl = data.weather[0].codeUrl;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
}
//include a function that will save the weather data
function saveWeather() {
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the temperature
    var temperature = data.main.temp;
    //include a variable for the wind speed
    var windSpeed = data.wind.speed;
    //include a variable for the wind direction
    var windDirection = data.wind.deg;
    //include a variable for the humidity
    var humidity = data.main.humidity;
    //include a variable for the weather icon
    var icon = data.weather[0].icon;
    //include a variable for the weather code
    var code = data.weather[0].code;
    //include a variable for the weather icon URL
    var iconUrl = data.weather[0].iconUrl;
    //include a variable for the weather code URL
    var codeUrl = data.weather[0].codeUrl;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
}
//include a function that will load the weather data
function loadWeather() {
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the temperature
    var temperature = data.main.temp;
    //include a variable for the wind speed
    var windSpeed = data.wind.speed;
    //include a variable for the wind direction
    var windDirection = data.wind.deg;
    //include a variable for the humidity
    var humidity = data.main.humidity;
    //include a variable for the weather icon
    var icon = data.weather[0].icon;
    //include a variable for the weather code
    var code = data.weather[0].code;
    //include a variable for the weather icon URL
    var iconUrl = data.weather[0].iconUrl;
    //include a variable for the weather code URL
    var codeUrl = data.weather[0].codeUrl;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the weather description
    var description = data.weather[0].description;
}
//include a function that will clear the weather data
function clearWeather() {
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the temperature
    var temperature = data.main.temp;
    //include a variable for the wind speed
    var windSpeed = data.wind.speed;
    //include a variable for the wind direction
    var windDirection = data.wind.deg;
    //include a variable for the humidity
    var humidity = data.main.humidity;
    //include a variable for the weather icon
    var icon = data.weather[0].icon;
    //include a variable for the weather code
    var code = data.weather[0].code;
    //include a variable for the weather icon URL
    var iconUrl = data.weather[0].iconUrl;
    //include a variable for the weather code URL
    var codeUrl = data.weather[0].codeUrl;
    //include a variable for the weather description
    var description = data.weather[0].description;
}
//include a function that will display the weather data
function displayWeather() {
    //include a variable for the weather description
    var description = data.weather[0].description;
    //include a variable for the temperature
    var temperature = data.main.temp;
    //include a variable for the wind speed
    var windSpeed = data.wind.speed;
    //include a variable for the wind direction
    var windDirection = data.wind.deg;
    //include a variable for the humidity
    var humidity = data.main.humidity;
    //include a variable for the weather icon
    var icon = data.weather[0].icon;
    //include a variable for the weather code
    var code = data.weather[0].code;
    //include a variable for the weather icon URL
    var iconUrl = data.weather[0].iconUrl;
    //include a variable for the weather code URL
    var codeUrl = data.weather[0].codeUrl;
    //include a variable for the weather description
    var description = data.weather[0].description;
}
displayWeather();


// q: the code above does not display the weather data.  What is wrong with it?
// a: the code above does not display the weather data because it is not calling the function.  It is only defining the function.  To call the function, you need to use the function name followed by parentheses.  For example, displayWeather().
