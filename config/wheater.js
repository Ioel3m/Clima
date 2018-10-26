const axios = require('axios')

const getClima = async (lat, long) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6be2c74256added402337a9a572e3b92&units=metric`)
    return {
        temp: resp.data.main.temp,
    }
}

module.exports = {
    getClima
}