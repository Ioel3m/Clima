const axios = require('axios')

const getGeoData = async (direccion) => {

    let encodeURL = encodeURI(direccion)


    let resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURL}.json?access_token=pk.eyJ1IjoiaW9lbDNtIiwiYSI6ImNqbmh4ZzczYTBpdTYzcHFyM2NocjVoaWgifQ.E4yLuRo9RX7cVquAIQHqBw`)

    if (resp.data.features.length <= 0) {
        throw new Error(`No existen resultados para la ubicacion ${direccion}`)
    }
    return {
        direccion: resp.data.features[0].place_name,
        latitud: resp.data.features[0].center[1],
        longitud: resp.data.features[0].center[0],
    }
}

module.exports = {
    getGeoData
}