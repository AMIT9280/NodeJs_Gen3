const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 3000;
const studentController = require("./controller/studentController")
const studentRouter = require("./routes/studentRoutes")

app.post("student",studentRouter)

//dataBase
mongoose.connect("mongodb://localhost:27017/NodeLerning",(err)=>{
            if(err){
                console.log("Database Not Connected..");
            }else{
                console.log("Database Connected..");
            }
})

//Server
app.listen(PORT,(err)=>{

        if(err){
            console.log("Server Not Started"+err);
        }else{
            console.log("Server Started on Port 3000");
        }
}) 