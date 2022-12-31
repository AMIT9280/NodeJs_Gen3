const roleSchema = require('../model/roleSchema')
const auth = () => async (req,res,next)=>{
    try {
        const role = req.headers.role
        if(!req.headers.role){
            throw new Error("Role Is Missing")
        }else{
        roleSchema.findById(role,(err,data)=>{
            if(err){
                return res.status(400).json({
                    msg:"SMW"
                })
            }else{
                if(data){
                    return next();
                }else{
                    return res.status(401).json({
                        msg:"You Are Unauthorized"
                    })
                }
            }
        })
        // if(role === "ADMIN" || role === "admin"){
        //     return next();
        // }else{
        //         throw new Error("Role Is Missing")
        // }
    }
    } catch (err) {
        return res.status(400).json({
            msg:err.message
        })
    }
} 

module.exports = {auth} ;