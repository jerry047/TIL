//Init weather object
const weather = new Weather('London', 'uk');

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'Florida');

function getWeather() {
    weather.getWeather()
    .then(results => {
        console.log(results)
    })
    .catch(err => console.log(err))
} 
 