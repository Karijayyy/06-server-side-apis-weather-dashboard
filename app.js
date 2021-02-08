let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let cityName = document.querySelector('.cityName')
let date = document.querySelector('.date')
let temperature = document.querySelector('.temperature')
let humidity = document.querySelector('.humidity')
let uvIndexEl = document.querySelector('.uvIndex')
let icon = document.querySelector('.icon')
let windSpeed = document.querySelector('.windSpeed')

button.addEventListener('click', function () {
    getTodaysWeather(inputValue.value)

})

function getTodaysWeather(searchValue) {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + searchValue + '&units=imperial&appid=f95318bd608cfefe9150d3d74bda27e7'
    )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //temperate literals will need to go in all 3 functions for icons
            $(".container").append(`
           <p>${data.main.showTemp}</p> 
           <p>${data.main.showCity}</p>
           <p>${data.main.showDate}</p>
           <p>${data.main.showHumidity}</p>
           <p>${data.main.showUvIndex}</p>
           <p>${data.main.showWindSpeed}</p>
           <p>${data.main.icon}</p>
           `)

            getUvIndex(data.coord.lat, data.coord.lon)
            getForecast(searchValue)

        })
        .catch(err => alert("City not found, please try again"))
}

function getUvIndex(lat, lon) {
    fetch('http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=f95318bd608cfefe9150d3d74bda27e7')
        .then(response => response.json())
        .then(UvResponse => {
            console.log(UvResponse)
            let uvIndex = UvResponse.value
        })
        .catch(err => alert("City not found, please try again"))

}

function getForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=f95318bd608cfefe9150d3d74bda27e7')
        .then(response => response.json())
        .then(forecastResponse => {
            console.log(forecastResponse)
        })

        .catch(err => alert("City not found, please try again"))
}