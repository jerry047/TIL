//Init weather object
const weather = new Weather('London', 'uk');
//Init UI object
const ui = new UI;

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'Florida');

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err))
} 
 