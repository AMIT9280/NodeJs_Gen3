const productSchema = require("../model/productSchema")


exports.addProduct = (req,res)=>{

    const Products = new productSchema(req.body);

    Products.save((err,data)=>{
        if(err){
            res.status(402).json({
                msg:"Product Not Add",
                data:err
            })
        }else{
            res.status(202).json({
                msg:"Product Added..",
                data:data
            })
        }
    })
}

exports.getAllProducts = (req,res)=>{

        productSchema.find((err,data)=>{
            if(err){
                res.status(402).json({
                    msg:"Error Faceting Product"
                })
            }else{

                    res.status(202).json({
                        msg:"Product Ret.. ",
                        data:data
                    })
            }
        })
}
