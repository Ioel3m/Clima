const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})


app.get('/', (req, res) => {

    res.render('home', {
        nombre: "Joel",
        ubicacion: 'index'
    })
})

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: "Joel",
        ubicacion: 'acerca de'
    })
})



// app.get('/data', function (req, res) {
//     let data = {
//         saludo1: "saludo desde data"
//     }
//     res.send(data)
// })

app.listen(port, () => {
    console.log("Escuchando al puerto 3000")
})