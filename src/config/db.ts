import mongoose from 'mongoose'
import Colors  from 'colors'

export const connectDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url=`${connection.host}:${connection.port}`
        console.log(Colors.cyan.bold(`MongoDB Conectado en ${url}`))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}