const mongoose = require("mongoose")

const schema = mongoose.Schema;

const ValidSchema = schema({

    otp: {
        type: String,
        required:true
    }
   
})

module.exports = mongoose.model("valid", ValidSchema);