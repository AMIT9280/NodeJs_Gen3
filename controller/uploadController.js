const multer = require('multer')
const path = require('path')
const uploadSchema = require('../model/uploadSchema')
const readFromExcel = require('../util/ReadDataFromExcel')
const googleController = require('./googleController')
//storage
const storage = multer.diskStorage({
    destination: "./uploads",
    //call back function
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

//save 
//uploads
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 9000000
    }
}).single('file')

exports.myData = [];

exports.uploadFile = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ message: err.message })
        } else {
            if (req.file == undefined) {
                res.status(400).json({ message: "No File selected" })
            } else {
                if (req.file.size > 5000000) {
                    return res.status(402).json({
                        error: "File Size Is to Large",
                    });
                } else {
                    var x = googleController.uploadFile(req.file.path);
                    var data = readFromExcel.readData(req.file.path);
                    if(x!=undefined || x!=null){
                        return res.status(200).json({
                            message:"File uploaded successfully",
                            file:x
                        });
                    } 
                    // this.myData = data;
                    // console.log(req.file.mimetype);
                    // console.log(req.file.size / 1000);
                    // let abspath = path.resolve('../uploads', req.file.originalname);
                    // const upload1 = new uploadSchema({
                    //     fileName: req.file.originalname,
                    //     filePath: abspath,
                    //     fileSize: req.file.size,
                    //     fileType: req.file.mimetype
                    // })
                    // upload1.save((err, data) => {
                    //     if (err) {
                    //         res.status(400).json({
                    //             msg: "err in saving file"
                    //         })
                    //     } else {
                    //         res.status(200).json({
                    //             msg: "File uploaded successfully",
                    //             file: `uploads/${req.file.originalname}`
                    //         })
                    //     }
                    // })
                }
            }
        }
    })
}