import express from 'express' //ESM Ecmascript modules
import 'dotenv/config'
import router from './router' //importacion de router
import { connectDB } from './config/db'//conexion con la base de datos 

const app = express()//aqui se creo una instancia de express

connectDB()

//leer datos de formularios 
app.use(express.json())
app.use('/',router)//cada que exista una peticion revisa cada una de las paguinas con el use


export default app
