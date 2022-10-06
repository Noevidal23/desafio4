const express = require('express')
const app = express()
const PORT = 8080
const routerProductos = require('./routes/productos.js')
const path = __dirname + '/public/index.html'
const server = app.listen(PORT, () => {
    console.log(`Servidor trabajando con normalidad en el puerto: ${PORT}`)
})

server.on('Error', err => console.log(`Tenemos un error: ${err}`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', routerProductos)
app.use('/form', express.static(path)) 
