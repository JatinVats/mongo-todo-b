const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const dotenv = require('dotenv')
const cors = require('cors')

//importing routes
const routes = require('./routes/ToDoRoute')



//app setup
const app = express()
const PORT = dotenv.port || 5000
app.use(express.json());
app.use(cors())

//connecting mongo

const connectDB = async () => { 
    try {
        
        await mongoose.connect('mongodb+srv://vatsjatin:vatsjatin@mongotodo.3kh7km5.mongodb.net/mongo-todo')
        console.log("CONNECTED TO MONGODB");
        
    } catch (error) {
        console.log(error)
    }
}

connectDB();

//using routes
app.use(routes)





 





app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})