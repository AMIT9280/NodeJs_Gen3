const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({

    productName:{
        type:String
    },
    qty:{
        type:Number
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model("product",productSchema)