const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-25.56657&lon=-57.24375&appid=225eaa74d162fa7cc745a339c10cc3c3&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}