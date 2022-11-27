const studentSchema = require("../model/studentSchema")


exports.addStudent = (req,res)=>{

        const Student = new studentSchema(req.body);
        
        Student.save((err,data)=>{
                if(err){
                    res.status(500).json({
                        msg:"Data Not Added.."
                    })
                }else{
                    res.status(201).json({
                        data:data,
                        msg:"Data Added Successfully.."
                    })
                }
        })
}