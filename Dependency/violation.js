const fetch = require("node-fetch");
const url ="http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no"


const fetchUser = () => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.headers);
})
.catch(err => {
	console.error(err);
});
};

fetchUser();
