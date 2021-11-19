require('dotenv').config()

const express = require('express')
const app = express() //Creamos el server Instanciando esa aplicacion 

app.use('/', require('./router')) 

app.use((req,res,next) => {  //Middleware
    res.status(404).send("Not found")
}) //Capturamos el error y le ponemos un mensaje a usuario a cualquier pagina que no exista

const port = process.env.PORT || 5000 // si se encuentra el PORT en el archivo oculto .env usa ese, sino usa el 5000. Queda de manera dinamica por si en un futuro se cambian los puertos

app.listen(port, () => console.log(`http://localhost:${port}`))
