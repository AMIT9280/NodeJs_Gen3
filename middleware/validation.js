const valid = require('../model/ValidationSchema')
const auth = () => async (req,res,next)=>{
    try {
        const otp = req.body.otp
        if(!req.body.otp){
            throw new Error("Pls Enter OTP")
        }else{
        valid.findOne(otp,(err,data)=>{
            if(err){
                return res.status(400).json({
                    msg:"SMW"
                })
            }else{
                if(data){
                    return next();
                }else{
                    return res.status(401).json({
                        msg:"OTP Verification Failed"
                    })
                }
            }
        })
        
    }
    } catch (err) {
        return res.status(400).json({
            msg:err.message
        })
    }
} 

module.exports = {valid} ;