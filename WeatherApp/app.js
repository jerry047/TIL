//Init local storage
const storage = new Storage();
//Get Stored location data
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI object
const ui = new UI();

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //Change location
    weather.changeLocation(city, state);

    //Set location to storage
    storage.setLocationData(city, state);

    //Get and display weather
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
});


function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err))
} 
 