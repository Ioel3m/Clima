const argv = require('./config/yargs').argv
const place = require('./config/place')
const clima = require('./config/wheater')

place.getGeoData(argv.direccion).then(res_place => {
    clima.getClima(res_place.latitud, res_place.longitud).then(resp_clima => {
        console.log(`El clima para ${res_place.direccion} es de ${resp_clima.temp}°\n`)
    })

}).catch(err => {
    console.log(err)
})


