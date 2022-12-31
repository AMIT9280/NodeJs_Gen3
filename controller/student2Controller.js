const student2Schema = require('../model/student2Schema')

exports.addStudents = (req,res)=>{
    res.json({
        msg:"Added Student"
    })
}