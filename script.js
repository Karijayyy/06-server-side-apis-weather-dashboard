// create variables
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.cityName')
var date = document.querySelector('.date')
var icon = document.querySelector('.icon')
var temperature = document.querySelector('.temperature')
var humidity = document.querySelector('.humidity')
var uvIndex = document.querySelector('.uvIndex')

button.addEventListener('click', function () {
    fetch(
        'api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=f95318bd608cfefe9150d3d74bda27e7'
    )
        .then(response => response.json())
        .then(data => console.log(data))
 .catch(err => alert("City not found, please try again"))
})
