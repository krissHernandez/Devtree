import colors from 'colors'
import server from './server'
const port = process.env.PORT || 4000//definimos puerto usado en computadora 

server.listen(port,()=>{//creacion del servidor web vistar localhost:4000 nota se puede usar cualquier puerto
    console.log(colors.magenta.bold('Servidor funcionando en el puerto:'),port)
})



type product = {
    id:number
    price:number
    name: string
}

let product : product= {
    id : 1,
    price : 30,
    name: "tablet"
}

const numero=[1,2,3,4]
