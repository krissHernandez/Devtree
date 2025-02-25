import server from './server'
const port = process.env.PORT || 4000//definimos puerto usado en computadora 

server.listen(port,()=>{//creacion del servidor web vistar localhost:4000 nota se puede usar cualquier puerto
    console.log('Servidor funcionando en el puerto:',port)
})




