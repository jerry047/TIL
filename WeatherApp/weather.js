class Weather {
    constructor(city, state){
        this.apiKey = 'f5c69d72161c323084097c5cb0564fb1';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from api
    async getWeather() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //Change the weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}