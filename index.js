//const express = require('express')//CJS common JS

import express from 'express' //ESM Ecmascript modules
const app = express()//aqui se creo una instancia de express

// Routing
app.get('/',(req,res)=>{//url principal de la pagina
    res.send('hola mundo en express')
})

const port = process.env.PORT || 4000//definimos puerto usado en computadora 

app.listen(port,()=>{//creacion del servidor web vistar localhost:4000 nota se puede usar cualquier puerto
    console.log('Servidor funcionando en el puerto:',port)
})




