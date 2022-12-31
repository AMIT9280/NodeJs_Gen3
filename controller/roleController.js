const roleSchema = require('../model/roleSchema')

exports.createRole = (req,res)=>{

        const role = roleSchema(req.body)

    role.save((err,data)=>{
        if(err){
            res.status(400).json({
                msg:'Err in Create Role'
            })
        }else{
            res.status(201).json({
                msg:'Role Created',
                data:data
            })
        }
    })
}