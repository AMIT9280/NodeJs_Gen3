const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 3000;

const studentRouter = require("./routes/studentRoutes")
const productRouter = require("./routes/productRoutes")
const departmentRouter = require("./routes/departmentRoutes")
const employeeRouter = require("./routes/employeesRoutes")
const cartRouter = require("./routes/cartRoutes")
const userRouter = require("./routes/userRoutes")
const uploadRouter = require("./routes/uploadRoutes")
const student2Router = require("./routes/student2Routes")
const roleRoutes = require('./routes/roleRoutes')
const signupRoutes = require('./routes/signupRoutes')

app.use("/student", studentRouter)
app.use("/product", productRouter)
app.use("/department", departmentRouter)
app.use("/employee", employeeRouter)
app.use("/cart", cartRouter)
app.use("/user", userRouter)
app.use("/upload", uploadRouter)
app.use("/student2",student2Router)
app.use("/role",roleRoutes)
app.use("/signup",signupRoutes)


//dataBase
mongoose.connect("mongodb://localhost:27017/NodeLerning", (err) => {
    if (err) {
        console.log("Database Not Connected..");
    } else {
        console.log("Database Connected..");
    }
})

//Server
app.listen(PORT, (err) => {

    if (err) {
        console.log("Server Not Started" + err);
    } else {
        console.log("Server Started on Port 3000");
    }
}) 