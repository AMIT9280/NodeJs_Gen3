const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    department:[
        {
            type:Schema.Types.ObjectId,
            ref:'Departments'
        }
    ]
})
module.exports = mongoose.model("Employees",employeeSchema)