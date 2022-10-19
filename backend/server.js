import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
const PORT = 8800;

dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to mongodb');
    } catch (error) {
        throw error
    }
}

app.get('/',(req,res) => {
    res.send("<h1>hello world!!!</h1>")
})

mongoose.connection.on("disconnected", () => {
    console.log('MongoDB is disconnected');
})
mongoose.connection.on("connected", () => {
    console.log('MongoDB is connected');
})

app.listen(PORT,()=>{
    connect();
    console.log(`server running on http://localhost:${PORT}`);
})

//