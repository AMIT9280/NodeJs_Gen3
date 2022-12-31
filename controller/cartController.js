const cartSchema = require('../model/cartSchema')

exports.AddToCart = (req, res) => {

    const cart = cartSchema(req.body);

    cart.save((err, data) => {

        if (err) {
            res.status(500).json({
                msg: "Error In Adding Cart"
            })
        } else {
            res.status(201).json({
                msg: "Cart Added",
                data: data
            })
        }
    })
}
//get all carts

exports.GetAllCart = (req,res) => {

    cartSchema.find().populate('user').populate('products').exec((err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Error In Fetching Cart"
            })
        } else {
            res.status(201).json({
                msg: "Cart Data Ret....",
                data: data
            })
        }
    })

}