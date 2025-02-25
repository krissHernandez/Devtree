import express from 'express' //ESM Ecmascript modules
const app = express()//aqui se creo una instancia de express

// Routing
app.get('/',(req,res)=>{//url principal de la pagina
    res.send('hola mundo en express / typeScript')  
})

export default app
