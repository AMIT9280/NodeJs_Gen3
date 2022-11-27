const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 3000;

app.get("/user/:name", (req, res) => {
        try {
                var Name = req.params.name
                var userStr = fs.readFileSync('./files/users.json', 'utf-8')
                u = JSON.parse(userStr);

                var users = u.filter((user) => {
                        return user.first_name === Name;
                })
                console.log(users);
                if (users.length > 0) {
                        res.json({
                                name: users
                        })
                }else{
                        throw new Error("Not Found")
                }
        } catch (err) {

                res.status(402).send("Error")

        }
})
app.get("/userAge/:age", (req, res) => {
        
                 Age = req.params.age
                var userStr = fs.readFileSync('./files/users.json', 'utf-8')
                u = JSON.parse(userStr);

                users = u.filter((user) => {
                        return user.age >= Age;
                })
                if (users[0].age >= 20) {
                        res.json({
                                data: users,
                                status:200
                        })
                }else{
                        res.status(402).send("Error")
                }
        

               

       
})
//server
app.listen(PORT, () => {
        console.log("Server Started on Port 3000");
})

