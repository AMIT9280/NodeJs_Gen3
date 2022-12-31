const departmentSchema = require("../model/departmentSchema")


exports.AddDepartment = (req,res)=>{

    const Departments = new departmentSchema(req.body);

    Departments.save((err,data)=>{
          if(err){
                res.status(500).json({
                    msg:"Error in Adding Departments"
                })
          } else{
            res.status(201).json({
                msg:"Added Departments",
                data:data
            })
          }
    })
}
