//Todas las rutas de nuestro proyecto las vamos a poner aca, hay que ir modularizando el proyecto.

const express = require('express')
const router = express.Router()

router.get('/',(req,res) => { //app. y el metodo que voy a utilizar para recibir informacion
    res.send("Hola Express")
}) //aca estamos diciendo, es la URL principal y es el metodo get responde con este Hola Express

router.get('/productos', (req,res) => {
    res.send('Lista de productos!!!')
})

router.get('/productos/:id', (req,res) => {
    res.send('Producto: ' + req.params.id)
})

module.exports = router //Exportarlo a donde queramos y sea necesario