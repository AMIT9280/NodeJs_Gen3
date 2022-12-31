const mongoose = require('mongoose')


const schema = mongoose.Schema;

const roleSchema = schema({

    name:{
        type:String
    },
    description:{
        type:String
    }
})

module.exports = mongoose.model('role',roleSchema)