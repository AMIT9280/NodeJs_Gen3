const mongoose = require("mongoose")

const schema = mongoose.Schema;

const userSchema = schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: String
    },
    otp:{
        type:String
    }
})

module.exports = mongoose.model("user", userSchema);