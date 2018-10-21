const argv = require('./config/yargs').argv
const place = require('./config/place')
const clima = require('./config/wheater')

place.getGeoData(argv.direccion).then(res_place => {
    clima.getClima(res_place.latitud, res_place.longitud).then(resp_clima => {
        console.log(`Pronostico del clima en ${res_place.direccion} es: \n Temperatura maxima: ${resp_clima.tempMax}°\n Temperatura minima: ${resp_clima.tempMin}°`)
    })

}).catch(err => {
    console.log(err)
})


