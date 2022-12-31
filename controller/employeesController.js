const employeeSchema = require('../model/employeeSchema')
var myData = require('../controller/uploadController')
exports.AddEmployees = (req,res)=>{

        const employees = employeeSchema(req.body) 
        employees.save((err,data)=>{
                if(err){
                    res.status(500).json({
                           msg:"Error in Adding Employees"     
                    })
                }else{
                    res.status(201).json({
                        msg:"Employees Added...",
                        data:data     
                 })
                }
        })
}
//get All Employees

exports.getAllEmployees = (req,res)=>{

        employeeSchema.find().populate('department').exec((err,data)=>{
             
            if(err){
                res.status(500).json({
                       msg:"Error in Fetching Emp"     
                })
            }else{
                res.status(201).json({
                    msg:"Employees Ret..",
                    data:data     
             })
            }
        })
}

//Bulk Insert

exports.insertBulkEmployees =  (req,res)=>{
        employeeSchema.insertMany(myData,(err,data)=>{
            if(err){
                res.status(500).json({
                    message:err.message || "SMW"
                })
            }else{
                res.status(201).json({
                    message:"Employee created successfully",
                    data:data
                })
            }
        })
}