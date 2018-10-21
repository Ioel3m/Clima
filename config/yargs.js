const argv = require('yargs').options({
    direccion: {
        alias: 'c',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv

module.exports = {
    argv
}

