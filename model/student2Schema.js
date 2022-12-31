const mongoose = require('mongoose');
const { string } = require('zod');

const schema = mongoose.Schema;

const Student2Schema = schema(
    {

    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    age:{
        type:String
    },
},
{
    timestamps:true
}

)

module.exports = mongoose.model("student2",Student2Schema);