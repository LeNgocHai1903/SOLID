const fetch = require("node-fetch");
const axios = require('axios').default;
const url ="http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no";

// if you want to change the way to fetch Url such as axios, fetch,... You can change code in getData function

//use axios
const getData = (url) => {
    axios.get(url);
}

//use fetch
// const getData = (url) => {
//     fetch(url, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "SIGN-UP-FOR-KEY",
//             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
//         }
//     })
//     .then(response => {
//         console.log(response.headers);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }



const fetchUser = () => {
    getData(url);
}


fetchUser();
