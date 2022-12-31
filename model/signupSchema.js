const mongoose = require('mongoose')

const schema = mongoose.Schema;

const signupSchema = schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("signup",signupSchema)